import { ShieldCheck, Truck, Headset, BadgeCheck, MapPin, Building2 } from 'lucide-react'
import { SITE } from '../data/site'
import './About.css'

const POINTS = [
  { icon: ShieldCheck, title: 'Genuine products', text: '100% authentic stock, sourced directly from trusted brands.' },
  { icon: Truck, title: 'Fast UK delivery', text: 'Free next-day shipping across the United Kingdom.' },
  { icon: Headset, title: 'Expert support', text: 'A friendly team ready to help you before and after you buy.' },
  { icon: BadgeCheck, title: '2-year warranty', text: 'Every device is covered, so you can shop with confidence.' },
]

export default function About() {
  return (
    <section id="about-us" className="about">
      <div className="container about-inner">
        <div className="about-visual reveal">
          <div className="about-blob" />
          <div className="about-card">
            <span className="about-card-tag">Est. 2016</span>
            <h3>{SITE.legalName}</h3>
            <ul>
              <li><Building2 size={17} /> Company no. {SITE.companyNumber}</li>
              <li><MapPin size={17} /> {SITE.address.city}, {SITE.address.region}</li>
              <li><BadgeCheck size={17} /> Private Limited · Active</li>
            </ul>
          </div>
        </div>

        <div className="about-copy reveal">
          <span className="eyebrow">About us</span>
          <h2>Your trusted home for <span className="accent">premium electronics</span></h2>
          <p>
            {SITE.legalName} is a UK-registered electronics retailer based in Slough.
            For years we've helped thousands of customers find the right tech — from
            flagship smartphones and laptops to audio, wearables and smart-home devices —
            backed by honest advice and genuine, fully-warranted products.
          </p>
          <p>
            Our mission is simple: make great technology accessible, affordable and
            effortless to buy. Every order is handled with care and shipped fast, right
            across the country.
          </p>
          <div className="about-points">
            {POINTS.map((p) => {
              const Icon = p.icon
              return (
                <div className="about-point" key={p.title}>
                  <span className="about-point-ico"><Icon size={22} /></span>
                  <div>
                    <b>{p.title}</b>
                    <i>{p.text}</i>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
