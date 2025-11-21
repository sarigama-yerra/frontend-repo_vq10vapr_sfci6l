import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-left"
          >
            <div className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-blue-200/80 mb-4">
              Available for freelance projects
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Your Name</span>
            </h1>
            <p className="mt-4 text-lg text-blue-100/90 max-w-xl">
              A software engineer crafting delightful web experiences with React, TypeScript, and cloud-native backends. I blend clean code, product thinking, and playful 3D interactions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 text-white font-medium backdrop-blur ring-1 ring-white/20 hover:bg-white/15 transition">
                Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            {["React", "TypeScript", "Node.js", "Python", "FastAPI", "PostgreSQL", "AWS", "Docker"].map((skill) => (
              <motion.li
                key={skill}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm text-blue-100/90 backdrop-blur"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
