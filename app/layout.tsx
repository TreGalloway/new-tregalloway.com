'use client'

import 'tailwindcss/tailwind.css'

import Navbar from 'components/navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <div className=" md:container md:mx-auto">
        <body className="text-black bg-white ">
          <Navbar />
          {children}
        </body>
      </div>
    </html>
  )
}
