import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Classes from './components/Classes'
import Facilities from './components/Facilities'
import Gallery from './components/Gallery'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Admissions from './components/Admissions'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 850)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (top < windowHeight - 80) {
          el.classList.add('revealed')
        }
      })
    }

    revealOnScroll()
    window.addEventListener('scroll', revealOnScroll)
    return () => window.removeEventListener('scroll', revealOnScroll)
  }, [])

  return (
    <>
      {!loaded && (
        <div className="page-loader">
          <div className="loader-ring"></div>
          <p>Welcome to Saraswathi Vidya Nikethan</p>
        </div>
      )}
      <ScrollProgress />
      <div className={loaded ? 'app ready' : 'app'}>
        <Navbar />
        <Hero />
        <main>
          <About />
          <Classes />
          <Facilities />
          <Gallery />
          <Achievements />
          <Testimonials />
          <Admissions />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  )
}

export default App
