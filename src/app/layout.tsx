import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/app/components/ui/Navbar'
import Footer from '@/app/components/ui/Footer'



export const metadata: Metadata = {
  title: 'Jamaica News',
  description: 'Headlines from Yard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dracula">
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        

        </head>
      <body>
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
