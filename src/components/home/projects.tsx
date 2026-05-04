const Projects = () => {
  const projectList = [
    {
      title: 'Rental House Management System',
      description: 'The rental property platform for tracking tenants, payments, maintenance requests, and property availability.',
      tech: ['PHP', 'MySQL'],
    },
    {
      title: 'Inventory Management System',
      description: ' The smart inventory dashboard that handles stock tracking, purchase orders, and product lifecycle management.',
      tech: ['PHP', 'MySQL'],
    },
    {
      title: 'Food Ordering Website',
      description: 'A responsive online ordering experience with menus, cart management, and order submission.',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
  ]

  return (
    <section id="projects" className="bg-white text-gray-900 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center md:text-left text-[#0A4646]">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project) => (
            <div key={project.title} className="flex flex-col rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-5">{project.description}</p>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span key={tag} className="rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="rounded-full bg-emerald-600 px-5 py-2 text-white font-semibold transition hover:bg-emerald-700">
                See details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects