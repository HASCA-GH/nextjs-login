import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import SideBar from '@/components/base/SideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextjs Login App',
  description: 'Shows a layout of diferent pages and adds the login functionality to the App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideBar />
        {children}
      </body>
    </html>
  )
}
