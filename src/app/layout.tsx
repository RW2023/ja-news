import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/app/components/ui/Navbar'
import Footer from '@/app/components/ui/Footer'



// Define a type for the component's props
interface RootLayoutProps {
  children: React.ReactNode;
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
        <meta
          name="description"
          content="Jamaican News Headlines and Top Stories"
        />
        <meta name="theme-color" content="#0F392D" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <title>Ja-News Aggregator</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
