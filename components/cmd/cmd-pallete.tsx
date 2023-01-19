import {
  IconArticle,
  IconCommand,
  IconDeviceLaptop,
  IconHome,
  IconNews,
  IconSearch,
} from '@tabler/icons'
// import confetti from 'canvas-confetti'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Command, CommandInput, CommandList, CommandOption } from 'superkey'

const CommandExample = () => {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // Actions =>
  const actions = [
    {
      id: 1,
      name: 'Home',
      icon: <IconHome size={18} />,
      shortcut: ['H'],
      action: () => router.push('/'),
    },
    {
      id: 2,
      name: 'Blog',
      icon: <IconArticle size={18} />,
      shortcut: ['B'],
      action: () => router.push('/blog'),
    },
    {
      id: 3,
      name: 'Tech',
      icon: <IconDeviceLaptop size={18} />,
      shortcut: ['T'],
      action: () => router.push('/tech'),
    },
    {
      id: 4,
      name: 'Newletter',
      icon: <IconNews size={18} />,
      shortcut: ['N'],
      action: () => router.push('/newsletter'),
    },
  ]

  // Confetti action =>
  //   const runConfetti = () => {
  //     confetti({
  //       particleCount: 200,
  //       startVelocity: 30,
  //       spread: 300,
  //       gravity: 1.2,
  //       origin: { y: 0 },
  //     })
  //   }

  // Ctrl+k to open command =>
  useEffect(() => {
    function handleKeyDown(event?: KeyboardEvent) {
      if (event?.key === 'k' && (event?.metaKey || event?.ctrlKey)) {
        event?.preventDefault()
        setOpen(!open)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [open])

  // Filter data =>
  const filteredData = query
    ? actions.filter((action) =>
        action.name.toLowerCase().includes(query.toLowerCase())
      )
    : actions

  return (
    <>
      <button
        className="p-2 transition-colors duration-100 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800"
        onClick={() => setOpen(!open)}
      >
        <IconCommand />
      </button>
      <Command
        open={open}
        onClose={() => setOpen(false)}
        afterLeave={() => {
          setQuery('')
        }}
        commandFunction={() => {
          setOpen(false)
        }}
        overlayClassName="bg-gray-300/60 dark:bg-zinc-900/60"
        className="p-5 bg-slate-50 ring-1 ring-black/10"
      >
        <CommandInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value)
          }}
          inputClassName="outline-0 "
        />
        <CommandList>
          {filteredData.map((example) => (
            <CommandOption
              key={example.id}
              value={example.action}
              activeClassName="bg-gray-100 dark:bg-zinc-700/25"
            >
              <div className="flex items-center justify-between py-1 space-x-1">
                <div className="flex items-center space-x-1">
                  <div className="mr-2">{example.icon}</div>
                  <h1>{example.name}</h1>
                </div>
                <div className="flex items-center space-x-1">
                  {example.shortcut.map((shortcut) => (
                    <span
                      key={shortcut}
                      className="p-2 text-xs lowercase border rounded-md border-zinc-300 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-gray-200"
                    >
                      {shortcut}
                    </span>
                  ))}
                </div>
              </div>
            </CommandOption>
          ))}
        </CommandList>
      </Command>
    </>
  )
}

export default CommandExample
