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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <nav className="bg-[#0A4646] text-white p-4 sticky top-0 z-20 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-xl font-bold ">Chifie dev</div>
        
        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            ) : (
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            )}
          </svg>
        </button>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 items-center gap-2 md:gap-3`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActiveLink(link.id);
                setIsMenuOpen(false);
              }}
              className={`w-full md:w-auto text-center px-4 py-2 rounded-md transition ${
                activeLink === link.id
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-100 hover:bg-[#083d3d]'
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
