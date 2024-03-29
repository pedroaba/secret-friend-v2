import './globals.css'

import type { Metadata } from 'next'
import { Istok_Web } from 'next/font/google'

import { Header } from '@/components/Header'

const istokeWeb = Istok_Web({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${istokeWeb.className}`}>
        <div className="flex min-h-screen flex-col antialiased">
          <Header />

          {children}
        </div>
      </body>
    </html>
  )
}
