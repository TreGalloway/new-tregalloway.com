'use client'
import { IconCommand } from '@tabler/icons'
import Head from 'next/head'
import Link from 'next/link'

import CommandExample from './cmd-pallete'

export default function Navbar() {
  // const [navbar, setNavbar] = useState(false)
  return (
    <div className="max-w-screen-xl px-4 py-6 mx-auto border border-cyan sm:py-12 sm:px-6 lg:px-8">
      <div className=" md:container md:mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Tre.
            </h1>
          </div>

          <div className="flex flex-col gap-4 mt-4 sm:mt-0 sm:flex-row sm:items-center">
            <ul className="flex items-center justify-center font-semibold">
              <li className="px-4 ">
                <Link href={'/'}>Home</Link>
              </li>
              <li className="px-4 ">
                <Link href={'/blog'}>Articles</Link>
              </li>
              <li className="px-4 ">
                <Link href={'/tech'}>Tech</Link>
              </li>
              <li className="px-4 ">
                <Link href={'/newsletter'}>Newsletter</Link>
              </li>
            </ul>
            {/* <button>
              <IconCommand onClick={() => {}} />
              <CommandMenu />
              <CmdPaletteUI />
            </button> */}
            <CommandExample />
          </div>
        </div>
      </div>
    </div>
  )
}
