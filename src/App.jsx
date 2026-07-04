import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'

export default function App() {
  return (
    <div className="min-h-screen bg-brutal-bg">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Marquee />
      <Projects />
      <Contact />
      <Footer />
      <MusicPlayer />
    </div>
  )
}
