import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Dashboard from './pages/Dashboard';
import { Login } from './pages/Login';
import DebugWindow from './pages/Reports/DebugWindow';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 10,
		},
	},
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: 'RecordDetails',
				element: <DebugWindow />,
			},
			{
				path: 'users',
				element: <div>Users</div>,
			},
			{
				path: 'files',
				element: <div>Files</div>,
			},
			{
				path: 'settings',
				children: [
					{
						path: 'project',
						element: <div>Project</div>,
					},
					{
						path: 'data-modal',
						element: <div>Data Modal</div>,
					},
					{
						path: 'roles',
						element: <div>Roles</div>,
					},
				],
			},
		],
	},
	{
		path: 'login',
		element: <Login />,
	},
]);

function Root() {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: 'mantine-color-scheme',
		defaultValue: 'light',
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
	return (
		<React.StrictMode>
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
					<QueryClientProvider client={queryClient}>
						<RouterProvider router={router} />
						<ReactQueryDevtools position="bottom-right" />
					</QueryClientProvider>
				</MantineProvider>
			</ColorSchemeProvider>
		</React.StrictMode>
	);
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
