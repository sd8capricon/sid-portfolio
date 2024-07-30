import "../styles/globals.css"
import { Metadata } from "next"
import { IBM_Plex_Mono } from "next/font/google"

interface LayoutProps {
    children: React.ReactNode
}

const ibmplexmono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
    title: "Siddharth Dhaigude",
    description: "My Portfolio Website",
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.ico"
    }
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
                <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap" rel="stylesheet" />
            </head>

            <body>
                {children}
            </body>
        </html>
    )
}