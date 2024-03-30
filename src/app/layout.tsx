import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import SideNav from "@/components/side-nav";
import MarginWidthWrapper from "@/components/margin-width-wrapper";
import PageWrapper from "@/components/page-wrapper";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Secure Wallet",
	description: "A wallet which secures your information",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`bg-white${inter.className}`}>
				<div className="flex">
					<SideNav />
					<MarginWidthWrapper>
						<main className="flex-1">
							<Header />
							<PageWrapper>{children}</PageWrapper>
						</main>
					</MarginWidthWrapper>
				</div>
			</body>
		</html>
	);
}
