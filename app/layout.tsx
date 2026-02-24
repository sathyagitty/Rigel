import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rigel Markets — Trade Global Markets",
  description:
    "International brokerage providing secure, transparent, and high-speed market access to Forex, NFTs, Stocks, Options, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
