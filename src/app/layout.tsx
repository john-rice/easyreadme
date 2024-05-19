import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { APP_URL } from '@/constants'

import '../styles/globals.css'
import '../styles/confetti.css'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Toaster } from 'sonner'

const title = 'Easyreadme - IA Powered README Builder'
const description = `Easyreadme helps you simplify README creation and generate visually stunning ones with the help of IA and elegant pre-designed templates.`
export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title,
  description,
  keywords: ['readme', 'easiest', 'ia', 'builder', 'markdown', 'git', 'github', 'gitlab'],
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Easyreadme.com',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/banner.jpg',
        width: 1835,
        height: 1000,
        type: 'image/jpeg'
      }
    ]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
    >
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster theme='system' />
      </body>
    </html>
  )
}
