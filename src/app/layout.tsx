import { inter } from '@app/ui/fonts'
import { ThemeProvider } from "@components/theme-provider"
import type { Metadata } from 'next'
import { Navbar } from '@components/Navbar'
import "./globals.css";

export const metadata: Metadata = {
  title: 'Soo Yeong Lih|Software Developer & Data Scientist',
  description:
    'Showcasing my projects, skills, and experience with a personal touch.',
  openGraph: {
    type: 'website',
    url: 'https://mattsoo.github.io/portfolio/',
    title: 'Soo Yeong Lih - Developer and Data Scientist',
    description: 'Showcasing my projects, skills, and experience with a personal touch.',
    images: [{ url: '/avatar.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soo Yeong Lih - Developer and Data Scientist',
    description: 'Showcasing my projects, skills, and experience with a personal touch.',
    images: ['/avatar.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
