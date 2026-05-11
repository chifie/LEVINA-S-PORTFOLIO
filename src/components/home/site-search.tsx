import { useMemo, useState } from 'react'

type SearchItem = {
  title: string
  category: string
  description: string
  href: string
  keywords: string[]
}

const searchItems: SearchItem[] = [
  {
    title: 'Home',
    category: 'Section',
    description: 'Welcome message and portfolio introduction.',
    href: '#home',
    keywords: ['welcome', 'portfolio', 'developer', 'web experiences'],
  },
  {
    title: 'About',
    category: 'Section',
    description: 'Computer Science background, developer story, and growth focus.',
    href: '#about',
    keywords: ['about', 'computer science', 'student', 'full-stack', 'real-world problems'],
  },
  {
    title: 'Frontend',
    category: 'Skill',
    description: 'HTML, CSS, JavaScript, TypeScript, and React.',
    href: '#skills',
    keywords: ['frontend', 'html', 'css', 'javascript', 'typescript', 'react'],
  },
  {
    title: 'Backend',
    category: 'Skill',
    description: 'PHP, MySQL, server logic, databases, and backend APIs.',
    href: '#skills',
    keywords: ['backend', 'php', 'mysql', 'server', 'database', 'api'],
  },
  {
    title: 'Learning',
    category: 'Skill',
    description: 'Python and PostgreSQL learning path.',
    href: '#skills',
    keywords: ['learning', 'python', 'postgresql', 'database'],
  },
  {
    title: 'Rental House Management System',
    category: 'Project',
    description: 'Tracks tenants, payments, maintenance requests, and property availability.',
    href: '#projects',
    keywords: ['rental', 'house', 'property', 'tenants', 'payments', 'maintenance', 'php', 'mysql'],
  },
  {
    title: 'Inventory Management System',
    category: 'Project',
    description: 'Handles stock tracking, purchase orders, and product lifecycle management.',
    href: '#projects',
    keywords: ['inventory', 'stock', 'purchase orders', 'products', 'php', 'mysql'],
  },
  {
    title: 'Food Ordering Website',
    category: 'Project',
    description: 'Responsive menu, cart management, and order submission.',
    href: '#projects',
    keywords: ['food', 'ordering', 'website', 'menu', 'cart', 'html', 'css', 'javascript'],
  },
  {
    title: 'Contact',
    category: 'Section',
    description: 'Email, WhatsApp, Instagram, GitHub, and message form.',
    href: '#contact',
    keywords: ['contact', 'email', 'whatsapp', 'instagram', 'github', 'message'],
  },
]

const SiteSearch = () => {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return searchItems
    }

    return searchItems.filter((item) => {
      const searchableText = [
        item.title,
        item.category,
        item.description,
        ...item.keywords,
      ]
        .join(' ')
        .toLowerCase()

      return searchableText.includes(normalizedQuery)
    })
  }, [normalizedQuery])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (results[0]) {
      window.location.hash = results[0].href
    }
  }

  return (
    <section id="search" className="bg-emerald-50 py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-xl border border-emerald-100 bg-white p-5 shadow-sm md:p-7">
          <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Search engine</p>
              <h2 className="text-2xl font-bold text-[#0A4646] md:text-3xl">Find anything in this portfolio</h2>
            </div>
            <p className="text-sm font-medium text-slate-500">{results.length} result{results.length === 1 ? '' : 's'}</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="site-search" className="sr-only">Search portfolio</label>
            <div className="relative flex-1">
              <svg
                viewBox="0 0 24 24"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 fill-none stroke-slate-400 stroke-2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
              </svg>
              <input
                id="site-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects, skills, or contact..."
                className="w-full rounded-lg border border-slate-300 py-3 pl-12 pr-4 text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-[#0A4646] px-6 py-3 font-semibold text-white transition hover:bg-[#083d3d]"
            >
              Search
            </button>
          </form>

          <div className="mt-6 grid gap-3">
            {results.length > 0 ? (
              results.map((item) => (
                <a
                  key={`${item.category}-${item.title}`}
                  href={item.href}
                  className="group rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                      {item.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </a>
              ))
            ) : (
              <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-5 text-center text-slate-600">
                No results found. Try searching for React, PHP, project, email, or contact.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SiteSearch
