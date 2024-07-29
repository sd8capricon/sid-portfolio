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
    title: "Siddharth",
    description: "My Portfolio Website"
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}