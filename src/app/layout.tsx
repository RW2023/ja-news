import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/app/components/ui/Navbar'
import Footer from '@/app/components/ui/Footer'



export const metadata: Metadata = {
  title: 'JA-News',
  description: 'Headlines from Yaad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="business">
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
