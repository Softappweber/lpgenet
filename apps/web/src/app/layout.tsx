import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Landing Page Generator',
  description: 'Premium landing pages for 20+ categories',
  keywords: 'landing page, generator, no-code, builder, template',
  authors: [{ name: 'Landing Page Generator Team' }],
  openGraph: {
    title: 'Landing Page Generator',
    description: 'Premium landing pages for 20+ categories',
    type: 'website',
    url: 'https://landing-page-generator.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
