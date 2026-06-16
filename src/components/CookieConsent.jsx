import { useEffect, useState } from 'react'
import { Cookie, X } from 'lucide-react'
import './CookieConsent.css'

const KEY = 'hhkh-cookie-consent'

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // show only if the user hasn't chosen before
    let stored = null
    try { stored = localStorage.getItem(KEY) } catch { /* ignore */ }
    if (!stored) {
      const t = setTimeout(() => setShow(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  const choose = (value) => {
    try { localStorage.setItem(KEY, value) } catch { /* ignore */ }
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="cookie" role="dialog" aria-label="Cookie consent">
      <div className="cookie-inner">
        <div className="cookie-ico"><Cookie size={22} /></div>
        <div className="cookie-text">
          <h4>We value your privacy</h4>
          <p>
            We use cookies to improve your experience, analyse traffic and personalise content.
            By clicking “Accept all”, you agree to our use of cookies. Read our{' '}
            <a href="#contact">cookie policy</a>.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn cookie-reject" onClick={() => choose('rejected')}>
            Reject all
          </button>
          <button className="cookie-btn cookie-accept" onClick={() => choose('accepted')}>
            Accept all
          </button>
        </div>
        <button className="cookie-close" aria-label="Dismiss" onClick={() => choose('dismissed')}>
          <X size={18} />
        </button>
      </div>
    </div>
  )
}
