import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import { SITE, ADDRESS_ONE_LINE } from '../data/site'
import logo from '../assets/hhkh-logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo">
              <img src={logo} alt="hhkh logo" className="logo-img" />
              <span className="logo-word">{SITE.shortName}</span>
            </span>
            <p>{SITE.legalName} — premium electronics & smart devices, delivered across the UK with care.</p>
            <ul className="footer-contact">
              <li><MapPin size={16} /> {ADDRESS_ONE_LINE}</li>
              <li><Phone size={16} /> <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a></li>
              <li><Mail size={16} /> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><Globe size={16} /> <a href={SITE.url}>{SITE.domain}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 {SITE.legalName} · Company no. {SITE.companyNumber}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
