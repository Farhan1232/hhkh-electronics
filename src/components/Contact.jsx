import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'
import { SITE, ADDRESS_ONE_LINE } from '../data/site'
import Button from './Button'
import './Contact.css'

const SOCIALS = [
  { Icon: FaWhatsapp, label: 'WhatsApp', href: `https://wa.me/${SITE.phoneHref.replace('+', '')}` },
  { Icon: FaFacebookF, label: 'Facebook', href: '#' },
  { Icon: FaInstagram, label: 'Instagram', href: '#' },
  { Icon: FaXTwitter, label: 'X', href: '#' },
  { Icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Website enquiry from ${form.name || 'a customer'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Get in touch</span>
          <h2>Contact <span className="accent">us</span></h2>
          <p>Have a question or want to place an order? Email us and our team will reply quickly.</p>
        </div>

        <div className="contact-grid reveal">
          {/* Info side */}
          <div className="contact-info">
            <h3>Talk to {SITE.legalName}</h3>
            <p className="contact-lead">
              The fastest way to reach us is by email — we handle every order and enquiry directly.
            </p>

            <a className="contact-row contact-row-main" href={`mailto:${SITE.email}`}>
              <span className="contact-ico"><Mail size={20} /></span>
              <div><i>Email us / place an order</i><b>{SITE.email}</b></div>
            </a>
            <a className="contact-row" href={`tel:${SITE.phoneHref}`}>
              <span className="contact-ico"><Phone size={20} /></span>
              <div><i>Call us</i><b>{SITE.phone}</b></div>
            </a>
            <div className="contact-row">
              <span className="contact-ico"><MapPin size={20} /></span>
              <div><i>Visit us</i><b>{ADDRESS_ONE_LINE}</b></div>
            </div>

            <div className="contact-socials">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a key={label} href={href} className="contact-social" aria-label={label} title={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Form side */}
          <form className="contact-form" onSubmit={submit}>
            <div className="field">
              <label>Your name</label>
              <input type="text" placeholder="Jane Smith" value={form.name} onChange={set('name')} required />
            </div>
            <div className="field">
              <label>Your email</label>
              <input type="email" placeholder="jane@example.com" value={form.email} onChange={set('email')} required />
            </div>
            <div className="field">
              <label>Message</label>
              <textarea rows="4" placeholder="Tell us what you need or which product you'd like to order…" value={form.message} onChange={set('message')} required />
            </div>
            <Button variant="primary" type="submit" className="contact-submit">
              <Send size={18} /> Send to {SITE.email}
            </Button>
            <p className="contact-formnote">This opens your email app addressed to our team.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
