import { ArrowRight, Play, Watch, Smartphone, Star } from 'lucide-react'
import Button from './Button'
import './Hero.css'

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
            <Button variant="primary">Shop Now <ArrowRight size={18} /></Button>
            <Button variant="ghost"><Play size={16} /> Learn More</Button>
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
              <img src="/hero-headphones.jpg" alt="Sony WH-1000XM4 wireless headphones" />
            </div>
            <div className="showcase-info">
              <span>Sony WH-1000XM4</span>
              <strong>£199.00</strong>
            </div>
          </div>
          <div className="mini-card mini-a">
            <span className="mini-ico" style={{ background: 'linear-gradient(135deg,#f7971e,#ffd200)' }}>
              <Watch size={22} />
            </span>
            <div><b>Pulse Watch 5</b><i>10-day battery</i></div>
          </div>
          <div className="mini-card mini-b">
            <span className="mini-ico" style={{ background: 'linear-gradient(135deg,#2193b0,#6dd5ed)' }}>
              <Smartphone size={22} />
            </span>
            <div><b>NovaPhone X</b><i>120Hz display</i></div>
          </div>
          <div className="mini-pill">⚡ Free express shipping</div>
        </div>
      </div>
    </section>
  )
}
