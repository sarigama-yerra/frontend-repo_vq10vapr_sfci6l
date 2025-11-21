import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-8 sm:p-10 backdrop-blur">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="md:col-span-2">
              <h2 className="text-3xl font-bold text-white">About</h2>
              <p className="mt-4 text-blue-200/85 leading-relaxed">
                I’m a product-minded software engineer focused on crafting lovable experiences. I care about code quality, velocity, and accessible design. I partner closely with designers and stakeholders, and I enjoy mentoring and building team culture.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  '7+ years professional experience',
                  'Full‑stack: React, TypeScript, Node, Python',
                  'Cloud: AWS, Docker, CI/CD',
                  'DX-focused: testing, tooling, performance'
                ].map((item) => (
                  <li key={item} className="text-blue-200/85 text-sm bg-white/5 ring-1 ring-white/10 rounded-md px-3 py-2">{item}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="md:col-span-1">
              <div className="h-48 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 ring-1 ring-white/10 flex items-center justify-center text-blue-100/80">
                Your Photo
              </div>
              <a href="#contact" className="mt-4 w-full inline-flex justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white ring-1 ring-white/10">Download Resume</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
