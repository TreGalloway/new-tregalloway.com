'use client'
import 'tailwindcss/tailwind.css'
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
import 'superkey/styles.css'

// import RenderResults from 'components/cmd/kbar-results'
import Navbar from 'components/navbar'

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
          <body className="">
            <Navbar />
            <div className="dark:bg-zinc-900 dark:text-white"> {children}</div>
          </body>
        </div>
      </div>
    </html>
  )
}
