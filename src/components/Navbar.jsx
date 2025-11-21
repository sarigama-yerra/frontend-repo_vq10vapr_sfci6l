import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-3 py-2 text-sm font-medium text-slate-200/90 hover:text-white hover:bg-white/5 rounded-md transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-md" />
            <span className="text-white font-semibold tracking-tight group-hover:text-blue-200 transition-colors">Software Engineer</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="ml-3 flex items-center gap-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-white/5 text-slate-200/80 hover:text-white transition-colors"><Github size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-white/5 text-slate-200/80 hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="mailto:hello@example.com" aria-label="Email" className="p-2 rounded-md hover:bg-white/5 text-slate-200/80 hover:text-white transition-colors"><Mail size={18} /></a>
            </div>
          </nav>

          <button className="md:hidden p-2 rounded-md text-slate-200/90 hover:text-white hover:bg-white/5" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            <NavLink href="#home" onClick={close}>Home</NavLink>
            <NavLink href="#projects" onClick={close}>Projects</NavLink>
            <NavLink href="#about" onClick={close}>About</NavLink>
            <NavLink href="#contact" onClick={close}>Contact</NavLink>
            <div className="pt-2 flex items-center gap-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200/80 hover:text-white transition-colors"><Github size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-200/80 hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="mailto:hello@example.com" className="p-2 rounded-md hover:bg-white/5 text-slate-200/80 hover:text-white transition-colors"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
