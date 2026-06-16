import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
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
  const [cart, setCart] = useState(0)
  const [toast, setToast] = useState(null)
  useReveal()

  const addToCart = (product) => {
    setCart((c) => c + 1)
    setToast(`${product.name} added to cart`)
  }

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2600)
    return () => clearTimeout(t)
  }, [toast])

  return (
    <>
      <Header cartCount={cart} />
      <main>
        <Hero />
        <StatsBar />
        <Brands />
        <About />
        <Products onAdd={addToCart} />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />

      <div className={`toast ${toast ? 'show' : ''}`}>
        <span className="toast-icon"><Check size={14} /></span>
        {toast}
      </div>
    </>
  )
}
