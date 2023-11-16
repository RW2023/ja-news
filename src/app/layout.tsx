import type { Metadata } from 'next'
import './globals.css'



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
    <html lang="en" data-theme="synthwave">
      <body>
        {children}
        </body>
    </html>
  )
}
