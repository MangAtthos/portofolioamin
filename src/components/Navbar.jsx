import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${
      scrolled ? 'bg-brutal-bg/95 backdrop-blur-sm border-b-3 border-brutal-black' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl w-full px-6 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brutal-yellow border-3 border-brutal-black 
                          flex items-center justify-center font-mono font-bold text-lg sm:text-xl
                          shadow-[3px_3px_0px_#1A1A2E] group-hover:shadow-[5px_5px_0px_#1A1A2E]
                          group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all">
              MA
            </div>
            <span className="font-bold text-lg sm:text-xl tracking-tight hidden sm:block">
              MUHAMMAD AMIN
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="neo-btn bg-brutal-cream px-4 py-2 text-sm hover:bg-brutal-yellow
                         no-underline text-brutal-black"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu btn */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden neo-btn bg-brutal-yellow p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-[3px] w-full bg-brutal-black transition-all duration-300 origin-left ${isOpen ? 'rotate-45' : ''}`} />
              <span className={`h-[3px] w-full bg-brutal-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`h-[3px] w-full bg-brutal-black transition-all duration-300 origin-left ${isOpen ? '-rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 border-b-3 border-brutal-black' : 'max-h-0'
      }`}>
        <div className="bg-brutal-bg px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="neo-btn bg-brutal-cream px-4 py-3 text-sm hover:bg-brutal-yellow
                       no-underline text-brutal-black text-center"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
