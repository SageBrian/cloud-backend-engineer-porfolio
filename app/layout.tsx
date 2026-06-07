import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Software & Cloud Engineer Portfolio',
  description: 'Terminal-themed portfolio showcasing cloud infrastructure, full-stack development, and DevOps expertise',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/metad.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/metad.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/metad.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-terminal-black scroll-smooth">
      <body className="font-sans antialiased bg-terminal-black text-terminal-gray">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
