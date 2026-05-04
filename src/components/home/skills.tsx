const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 text-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3">React</h3>
            <p className="text-gray-600 mb-4">Build responsive, component-driven user interfaces with reusable React components, hooks, and modern state management.</p>
            <div className="inline-flex flex-wrap gap-2">
              <span className="rounded-full bg-pink-100 text-pink-700 px-3 py-1 text-sm">React</span>
              <span className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-sm">Tailwind</span>
              <span className="rounded-full bg-green-100 text-green-700 px-3 py-1 text-sm">JSX</span>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3">PHP</h3>
            <p className="text-gray-600 mb-4">Create server-side logic, connect with databases, and build backend APIs for full-stack applications using PHP.</p>
            <div className="inline-flex flex-wrap gap-2">
              <span className="rounded-full bg-yellow-100 text-yellow-700 px-3 py-1 text-sm">PHP</span>
              <span className="rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-sm">MySQL</span>
              <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-sm">Backend</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills