import { ClerkProvider } from '@clerk/nextjs'

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
    <ClerkProvider>
      <html lang="en">
        {/* <body className={inter.className} ></body> */}
        <body className='flex flex-row' >
          <SideBar />
          <div className='mx-36 text-2xl flex flex-col item-center text-center mt-12'>Hello
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
