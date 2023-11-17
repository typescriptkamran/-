import Link from 'next/link'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Step00-Hello world',
  description: 'First lecture on Next Js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <header className = "flex gap-5 py-5 px-5 bg-gray-800 text-white">
          
          <Link href="\">Home</Link>
          <Link href="\about">About</Link>
          <Link href="\contact-us">Contact Us</Link>                   
          <Link href="\login">Login</Link>
          <Link href="\blog">blog</Link>
          <Link href="\dashboard">Dashboard</Link>
          <Link href="\dashboard\settings">Settings</Link>
                   
          </header>


        {children}

      </body>
    </html>
  )
}
