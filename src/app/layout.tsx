import Footer from '@/components/footer'
import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'

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
    <html lang="en" className='min-h-full h-full'>
      <body className='min-h-full grid grid-rows-[auto_1fr_auto]'>
        <Header />
        {children}
        <Footer />
    </body>
    </html>
  )
}
