import { Noto_Sans as FontSans } from "next/font/google";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL ? `https://mls.dawes.cc/` : "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "MG MLS Golden Boot",
	description: "Mind Goblin's 2024 MLS Golden Boot",
	openGraph: {
		title: "MG MLS Golden Boot",
		description: "Mind Goblin's 2024 MLS Golden Boot",
		url: `${defaultUrl}`,
		siteName: "MG MLS Golden Boot",
		type: "website",
		images: [
			{
				width: 1200,
				height: 600,
				alt: "Mind Goblin's 2024 MLS Golden Boot",
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
		<html
			suppressHydrationWarning
			lang='en'>
			<body className={`${fontSans.className}`}>{children}</body>
		</html>
	);
}
