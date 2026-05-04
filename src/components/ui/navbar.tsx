import { useEffect, useState } from 'react'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const setFromHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        setActiveLink(hash)
      }
    }

    setFromHash()
    window.addEventListener('hashchange', setFromHash)

    return () => {
      window.removeEventListener('hashchange', setFromHash)
    }
  }, [])

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-20 shadow-sm">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-3">
        <div className="text-xl font-bold ">Chifie dev</div>
        <div className="flex flex-wrap items-center gap-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveLink(link.id)}
              className={`px-3 py-2 rounded-md transition ${
                activeLink === link.id
                  ? 'bg-pink-500 text-white font-semibold'
                  : 'text-gray-200 hover:text-white hover:bg-gray-700'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
