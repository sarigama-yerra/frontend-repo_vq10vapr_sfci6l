import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description: 'WebSocket-powered collaborative editor with CRDTs and offline sync.',
    tags: ['React', 'TypeScript', 'WebSockets', 'CRDT'],
    link: '#'
  },
  {
    title: '3D Portfolio Playground',
    description: 'Interactive 3D scenes with Spline and custom shaders tied to scroll.',
    tags: ['Spline', 'Three.js', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'AI Issue Triage',
    description: 'Embeddings and LLMs to auto-route and summarize incoming tickets.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'PGVector'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(99,102,241,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Selected Projects</h2>
            <p className="mt-2 text-blue-200/80 max-w-2xl">A few things I’ve built recently. More on request.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15">Work together</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/15 p-5 overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl group-hover:blur-2xl transition" />
              <h3 className="text-white font-semibold text-lg mb-1">{p.title}</h3>
              <p className="text-blue-200/80 text-sm mb-3 min-h-[48px]">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs text-blue-200/80 bg-white/5 ring-1 ring-white/10 rounded-md px-2 py-1">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
