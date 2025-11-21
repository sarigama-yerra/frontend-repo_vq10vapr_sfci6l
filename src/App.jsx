import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(1200px_600px_at_90%_10%,rgba(129,140,248,0.15),transparent_60%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <footer className="py-10 text-center text-blue-200/70">
          © {new Date().getFullYear()} Your Name — Crafted with care
        </footer>
      </main>
    </div>
  )
}

export default App
