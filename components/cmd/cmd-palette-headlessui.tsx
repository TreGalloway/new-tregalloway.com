import { Combobox, Dialog, Transition } from '@headlessui/react'
import { IconSearch } from '@tabler/icons'
import { settingsQuery } from 'lib/sanity.queries'
import { Router, useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { useProjectStore } from 'sanity'

const navlinks = [{ title: 'Home', id: 'home', href: '/' }]

export default function CmdPaletteUI(navlinks) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    function onKeydown(event) {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey))
        setIsOpen(!isOpen)
    }
    window.addEventListener('keydown', onkeydown)
    return () => {
      window.removeEventListener('keydown', onkeydown)
    }
  }, [isOpen])

  const filteredNavLinks = query
    ? navlinks.filter((navlinks) =>
        navlinks.title.toLowerCase().includes(query.toLowerCase)
      )
    : []

  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      className="fixed inset-0 overflow-y-auto bg-slate-300 p-4 pt-[25vh]"
    >
      <Dialog.Overlay className="fixed inset-0 bg-gray-400/75" />
      <Combobox
        as="div"
        onChange={(navlinks) => {
          setIsOpen(false)
          router.push('/${navlinks.id}')
        }}
        className="relative max-w-xl mx-auto bg-white shadow-2xl ring-1/5 rounded-xl"
      >
        <div className="flex items-center px-4">
          <IconSearch className="w-6 h-6 text-gray-500" />
          <Combobox.Input
            className="w-full h-12 text-sm text-gray-700 placeholder-gray-400 bg-transparent border-0 focus:ring-0"
            placeholder="Search..."
            onChange={(event) => {
              setQuery(event.target.value)
            }}
          />
        </div>
        <Combobox.Options
          static
          className="py-4 overflow-y-auto text-sm max-h-96"
        >
          {navlinks.map((navlinks) => (
            <Combobox.Option key={navlinks.id}>
              <div> {navlinks.title}</div>
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </Dialog>
  )
}
