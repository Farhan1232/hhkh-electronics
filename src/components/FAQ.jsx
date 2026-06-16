import { useState } from 'react'
import { Plus, Mail, Phone } from 'lucide-react'
import { SITE } from '../data/site'
import './FAQ.css'

const FAQS = [
  { q: 'Do you offer free delivery?',
    a: 'Yes! We offer free standard delivery on every order across the United Kingdom, with no minimum spend. Next-day delivery is also available at checkout.' },
  { q: 'How long will my order take to arrive?',
    a: 'Standard delivery typically takes 2–3 working days, while next-day orders placed before 4pm are delivered the following working day.' },
  { q: 'What is your returns policy?',
    a: 'You can return any unused item within 30 days for a full refund. Just contact our team and we’ll arrange a free returns label for you.' },
  { q: 'Are your products genuine and covered by warranty?',
    a: 'Absolutely. Every product is 100% authentic and sourced from trusted brands. All devices come with a minimum 2-year warranty for complete peace of mind.' },
  { q: 'Which payment methods do you accept?',
    a: 'We accept all major debit and credit cards (Visa, Mastercard, Amex), as well as PayPal, Apple Pay and Google Pay — all through a secure, encrypted checkout.' },
  { q: 'Can I track my order?',
    a: 'Yes. As soon as your order ships you’ll receive an email with a tracking link so you can follow your parcel right to your door.' },
  { q: 'Do you ship outside the UK?',
    a: 'At the moment we ship within the United Kingdom only. We’re working on expanding to more regions soon — sign up to be the first to know.' },
  { q: 'How can I contact customer support?',
    a: `Our friendly team is here to help. Call us on ${SITE.phone} or email ${SITE.email} and we’ll get back to you as quickly as possible.` },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="faq">
      <div className="container faq-inner">
        <div className="faq-aside reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently asked <span className="accent">questions</span></h2>
          <p>Everything you need to know about ordering, delivery and support. Can’t find your answer? Get in touch.</p>
          <div className="faq-contact">
            <a href={`tel:${SITE.phoneHref}`} className="faq-contact-item">
              <span><Phone size={18} /></span>
              <div><i>Call us</i><b>{SITE.phone}</b></div>
            </a>
            <a href={`mailto:${SITE.email}`} className="faq-contact-item">
              <span><Mail size={18} /></span>
              <div><i>Email us</i><b>{SITE.email}</b></div>
            </a>
          </div>
        </div>

        <div className="faq-list reveal">
          {FAQS.map((item, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{item.q}</span>
                <Plus size={20} className="faq-icon" />
              </button>
              <div className="faq-a-wrap">
                <p className="faq-a">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
