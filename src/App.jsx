import Header from './components/Header'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Brands from './components/Brands'
import About from './components/About'
import Products from './components/Products'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CookieConsent from './components/CookieConsent'
import useReveal from './hooks/useReveal'
import './App.css'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Brands />
        <About />
        <Products />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </>
  )
}
