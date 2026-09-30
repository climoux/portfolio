import type { Metadata } from "next";
import "@/css/globals.css";

export const metadata: Metadata = {
    title: "Portfolio - Clément Menguy",
    description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="fr">
            <head>
                {/* Import Satoshi & Ranade fonts */}
                <link href="https://api.fontshare.com/v2/css?f[]=ranade@400,500&display=swap" rel="stylesheet" /> 
                <link href="https://api.fontshare.com/v2/css?f[]=satoshi@500,700&display=swap" rel="stylesheet" /> 
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
