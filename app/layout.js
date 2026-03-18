import localFont from 'next/font/local'
import Navbar from './components/Navbar'
import "./globals.css"

// define a custom font
export const VT323 = localFont({
  src: [
    {
      path: '../public/fonts/vt323/VT323-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/vt323/VT323-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-vt323',
  preload: true,
})

// define metadata, this is used by the browser
// to show additional information for your site
export const metadata = {
  title: "SharkByte 2026",
  description: "Join SharkByte",
  icons: '/icons/favicon.ico'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
