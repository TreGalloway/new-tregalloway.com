import { Command } from 'cmdk'
import React from 'react'

export default function CommandMenu() {
  const [open, setOpen] = React.useState(false)

  // Toggle the menu when ⌘K or Control + K is pressed
  React.useEffect(() => {
    const down = (e) => {
      if ((e.key === 'k' && e.metaKey) || e.ctrlKey) {
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 overflow-y-auto bg-slate-300 p-4 pt-[25vh]"
    >
      <Command.Input />
      <Command.List className="fixed inset-0 bg-gray-400/75">
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Letters">
          <Command.Item>a</Command.Item>
          <Command.Item>b</Command.Item>
          <Command.Separator />
          <Command.Item>c</Command.Item>
        </Command.Group>

        <Command.Item>Apple</Command.Item>
      </Command.List>
    </Command.Dialog>
  )
}
