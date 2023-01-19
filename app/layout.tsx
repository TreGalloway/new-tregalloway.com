'use client'
import 'tailwindcss/tailwind.css'

// import RenderResults from 'components/cmd/kbar-results'
import Navbar from 'components/navbar'
// import {
//   KBarAnimator,
//   KBarPortal,
//   KBarPositioner,
//   KBarProvider,
//   KBarResults,
//   KBarSearch,
//   NO_GROUP,
//   useMatches,
// } from 'kbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <div>
        <div className=" className md:container md:mx-auto">
          <body className="text-black bg-white ">
            <Navbar />
            {children}
          </body>
        </div>
      </div>
    </html>
  )
}
