"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDE_NAV_ITEMS } from "@/constants";
import { SideNavItem } from "@/types";
import { Icon } from "@iconify/react";

const SideNav = () => {
	return (
		<div className="md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
			<div className="flex flex-col space-y-6 w-full">
				<Link
					href="/"
					className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full"
				>
					{/* <span className="h-7 w-7 bg-zinc-300 rounded-lg" /> */}
					<Icon
						icon="mdi:book-secure-outline"
						className="text-[#1fa89f] bg-white"
						width="32"
						height="32"
					/>
					<span className="font-bold text-xl hidden md:flex">
						Secure Wallet
					</span>
				</Link>

				<div className="flex flex-col space-y-2  md:px-6 ">
					{SIDE_NAV_ITEMS.map((item) => {
						return (
							<MenuItem
								key={item.title.toLowerCase()}
								item={item}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
	const pathname = usePathname();
	const [subMenuOpen, setSubMenuOpen] = useState(false);
	const toggleSubMenu = () => {
		setSubMenuOpen(!subMenuOpen);
	};

	return (
		<div className="">
			{item.subMenu ? (
				<>
					<button
						onClick={toggleSubMenu}
						className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
							pathname.includes(item.path) ? "bg-zinc-100" : ""
						}`}
					>
						<div className="flex flex-row space-x-4 items-center">
							{item.icon}
							<span className="font-semibold text-l  flex">
								{item.title}
							</span>
						</div>

						<div
							className={`${
								subMenuOpen ? "rotate-180" : ""
							} flex`}
						>
							<Icon
								icon="lucide:chevron-down"
								width="24"
								height="24"
							/>
						</div>
					</button>

					{subMenuOpen && (
						<div className="my-2 ml-12 flex flex-col space-y-4">
							{item.subMenuItems?.map((subItem) => {
								return (
									<Link
										key={subItem.title.toLowerCase()}
										href={subItem.path}
										className={`${
											subItem.path === pathname
												? "font-bold"
												: ""
										}`}
									>
										<span>{subItem.title}</span>
									</Link>
								);
							})}
						</div>
					)}
				</>
			) : (
				<Link
					href={item.path}
					className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
						item.path === pathname ? "bg-zinc-100" : ""
					}`}
				>
					{item.icon}
					<span className="font-semibold text-l flex">
						{item.title}
					</span>
				</Link>
			)}
		</div>
	);
};
