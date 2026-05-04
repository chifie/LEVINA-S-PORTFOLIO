const Skills = () => {
  return (
    <section id="skills" className="bg-white text-gray-900 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center md:text-left text-[#0A4646]">Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-[#0A4646]">Frontend</h3>
            <p className="text-gray-600 mb-4">Building responsive, component-driven user interfaces using modern web standards and frameworks.</p>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'].map((skill) => (
                <span key={skill} className="rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-[#0A4646]">Backend</h3>
            <p className="text-gray-600 mb-4">Creating server-side logic, connecting with databases, and building robust backend APIs.</p>
            <div className="flex flex-wrap gap-2">
              {['PHP', 'MySQL'].map((skill) => (
                <span key={skill} className="rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-[#0A4646]">Learning</h3>
            <p className="text-gray-600 mb-4">Actively expanding my technical stack with modern programming languages and advanced database systems.</p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'PostgreSQL'].map((skill) => (
                <span key={skill} className="rounded-full bg-[#0A4646] text-white px-3 py-1 text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills