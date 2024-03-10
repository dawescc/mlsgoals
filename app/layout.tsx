import { Be_Vietnam_Pro as FontSans } from "next/font/google";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL ? `https://mls.dawes.cc/` : "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "MG MLS Goal Race",
	description: "Mind Goblin's 2024 MLS Goal Draft",
	openGraph: {
		title: "MG MLS Goal Race",
		description: "Mind Goblin's 2024 MLS Goal Draft",
		url: `${defaultUrl}`,
		siteName: "MG MLS Goal Race",
		type: "website",
		images: [
			{
				width: 1200,
				height: 600,
				alt: "Mind Goblin's 2024 MLS Goal Draft",
			},
		],
	},
};

const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html suppressHydrationWarning>
			<body className={`${fontSans.className} antialiased px-4 sm:px-0`}>{children}</body>
		</html>
	);
}
