import { Icon } from "@iconify/react";
import { SideNavItem } from "./types";

export const SIDE_NAV_ITEMS: SideNavItem[] = [
	{
		title: "Home",
		path: "/",
		icon: (
			<Icon
				icon="material-symbols:garage-home-rounded"
				style={{ color: "#1fa89f" }}
			/>
		),
	},
	{
		title: "Cards",
		path: "/cards",
		icon: (
			<Icon
				icon="material-symbols:credit-card-outline"
				style={{ color: "#1fa89f" }}
			/>
		),
		subMenu: true,
		subMenuItems: [
			{ title: "Credit Card", path: "/cards/credit-card" },
			{ title: "Debit Card", path: "/cards/debit-card" },
			{ title: "Food Card", path: "/cards/food-card" },
		],
	},
	{
		title: "Accounts",
		path: "/accounts",
		icon: (
			<Icon
				icon="material-symbols:account-balance-wallet"
				style={{ color: "#1fa89f" }}
			/>
		),
		subMenu: true,
		subMenuItems: [
			{ title: "Bank Account", path: "/accounts/bank-account" },
			{ title: "Serivce Account", path: "/accounts/service-account" },
			{ title: "App Account", path: "/accounts/app-account" },
		],
	},
	{
		title: "Addresses",
		path: "/addresses",
		icon: (
			<Icon
				icon="material-symbols:location-city"
				style={{ color: "#1fa89f" }}
			/>
		),
		subMenu: true,
		subMenuItems: [
			{ title: "Personal", path: "/addresses/personal" },
			{ title: "Work", path: "/addresses/work" },
			{ title: "Other", path: "/addresses/other" },
		],
	},
	{
		title: "Documents",
		path: "/documents",
		icon: (
			<Icon
				icon="material-symbols:document-scanner"
				style={{ color: "#1fa89f" }}
			/>
		),
		subMenu: true,
		subMenuItems: [
			{ title: "Personal", path: "/documents/identity" },
			{ title: "Work", path: "/documents/education" },
			{ title: "Other", path: "/documents/employement" },
		],
	},
	{
		title: "Preferences",
		path: "/preferences",
		icon: (
			<Icon
				icon="material-symbols:temp-preferences-eco-sharp"
				style={{ color: "#1fa89f" }}
			/>
		),
		subMenu: true,
		subMenuItems: [{ title: "Tags", path: "/preferences/tags" }],
	},
];
