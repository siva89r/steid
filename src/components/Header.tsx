import React from 'react';
import {
	Header as MantineHeader,
	MediaQuery,
	Burger,
	Text,
	Switch,
	Group,
	useMantineColorScheme,
	useMantineTheme,
	Container,
} from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

import { HeaderProps } from '../utils/interface';

export default function Header({ opened, setOpened }: HeaderProps) {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const theme = useMantineTheme();

	return (
		<MantineHeader height={{ base: 50, md: 70 }} p="md">
			<div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
				<Group>
					<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
						<Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" mr="xl" />
					</MediaQuery>
					{/* <Text>Application Logo</Text> */}
					<Text>SoftTest</Text>
				</Group>
				<Group position="right">
					<Group position="center" my={30}>
						<Switch
							checked={colorScheme === 'dark'}
							onChange={() => toggleColorScheme()}
							size="lg"
							onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
							offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
						/>
					</Group>
				</Group>
			</div>
		</MantineHeader>
	);
}
