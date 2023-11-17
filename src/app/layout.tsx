import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/ui/Navbar'



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
    <html lang="en" data-theme="dark">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
