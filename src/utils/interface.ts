export interface NavbarProps {
	opened: boolean;
	menus: Menu[];
}
export interface HeaderProps {
	opened: boolean;
	setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Menu {
	label: string;
	icon: React.FC<any>;
	link?: string;
	initiallyOpened?: boolean;
	children?: ChildMenu[];
}

export interface ChildMenu {
	label: string;
	link: string;
}
