import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell, Text, useMantineTheme } from '@mantine/core';
import { menus } from './pages/menus';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

export default function App() {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);

	return (
		<AppShell
			styles={{
				main: {
					background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={<Navbar opened={opened} menus={menus} />}
			footer={<Footer />}
			header={<Header opened={opened} setOpened={setOpened} />}
		>
			<Outlet />
		</AppShell>
	);
}
