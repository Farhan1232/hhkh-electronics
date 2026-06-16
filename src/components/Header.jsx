import { useEffect, useState } from 'react'
import { Phone, Menu, X, ShoppingCart } from 'lucide-react'
import { SITE } from '../data/site'
import logo from '../assets/icon.svg'
import './Header.css'

const LINKS = ['Home', 'About Us', 'Products', 'Reviews', 'FAQ', 'Contact']

export default function Header({ cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const slug = (l) =>
    l.toLowerCase().replace(/\s+/g, '-')

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="hhkh logo" className="logo-img" />
          <span className="logo-word">{SITE.shortName}</span>
        </a>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l} href={`#${slug(l)}`} className="nav-link" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="cart-btn" aria-label="Cart">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <a href={`tel:${SITE.phoneHref}`} className="phone-pill">
            <Phone size={16} /> {SITE.phone}
          </a>
          <button className="burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
