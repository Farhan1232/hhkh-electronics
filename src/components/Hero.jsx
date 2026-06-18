import { ArrowRight, Play, Tv, HardDrive, Star } from 'lucide-react'
import Button from './Button'
import './Hero.css'

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <span className="eyebrow">Premium Electronics Store</span>
          <h1>
            Smart tech choices are<br />
            <span className="accent">smart investments.</span>
          </h1>
          <p>
            Discover hand-picked gadgets, audio, wearables and smart-home devices —
            engineered to perform and priced to love. Free, fast shipping on every order.
          </p>
          <div className="hero-cta">
            <Button variant="primary" onClick={() => scrollToId('products')}>
              Shop Now <ArrowRight size={18} />
            </Button>
            <Button variant="ghost" onClick={() => scrollToId('about-us')}>
              <Play size={16} /> Learn More
            </Button>
          </div>
          <div className="hero-trust">
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span><strong>4.9/5</strong> from 89,000+ happy customers</span>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="visual-blob" />
          <div className="showcase-card floating">
            <div className="showcase-icon">
              <img
                src="https://media.4rgos.it/s/Argos/7616497_R_SET?w=750&h=750&qlt=80&fmt.jpeg.interlaced=true"
                alt="Sony WH-1000XM6 wireless headphones"
                loading="lazy"
              />
            </div>
            <div className="showcase-info">
              <span>Sony WH-1000XM6</span>
              <strong>£399.00</strong>
            </div>
          </div>
          <div className="mini-card mini-a">
            <span className="mini-ico" style={{ background: 'linear-gradient(135deg,#2193b0,#6dd5ed)' }}>
              <Tv size={22} />
            </span>
            <div><b>Samsung 65&Prime; 4K TV</b><i>UHD HDR LED</i></div>
          </div>
          <div className="mini-card mini-b">
            <span className="mini-ico" style={{ background: 'linear-gradient(135deg,#11998e,#38ef7d)' }}>
              <HardDrive size={22} />
            </span>
            <div><b>SanDisk Ultra 128GB</b><i>USB 3.0 flash drive</i></div>
          </div>
          <div className="mini-pill">⚡ Free express shipping</div>
        </div>
      </div>
    </section>
  )
}
