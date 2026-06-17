import { useEffect } from 'react'
import { X, Star, MessageSquare, Mail, Check } from 'lucide-react'
import { SITE } from '../data/site'
import './ProductModal.css'

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (product) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [product, onClose])

  if (!product) return null

  const moq = product.moq || 100

  const enquiryMailto =
    `mailto:${SITE.email}?subject=${encodeURIComponent(`Enquiry: ${product.name}`)}` +
    `&body=${encodeURIComponent(
      `Hello ${SITE.legalName},\n\n` +
      `I would like to enquire about the following item:\n\n` +
      `• Product: ${product.name}\n` +
      `• Category: ${product.cat}\n` +
      `• Price: ${product.price}\n` +
      `• Quantity (min. order ${moq} pcs): ${moq}\n\n` +
      `Please confirm availability, wholesale pricing and delivery time.\n\n` +
      `My details / delivery address:\n\nThank you.`
    )}`

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={20} /></button>

        <div className="modal-grid">
          <div className="modal-media">
            <img src={product.image} alt={product.name} className="modal-img" />
          </div>

          <div className="modal-body">
            <span className="modal-cat">{product.cat} · {product.brand}</span>
            <h2>{product.name}</h2>
            {product.rating > 0 && (
              <div className="modal-rate">
                <span className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.round(product.rating) ? 'currentColor' : 'none'} />
                  ))}
                </span>
                <em>{product.rating} · {product.reviews} reviews</em>
              </div>
            )}

            <p className="modal-desc">{product.desc}</p>

            <ul className="modal-specs">
              {Object.entries(product.specs).map(([k, v]) => (
                <li key={k}><span>{k}</span><b>{v}</b></li>
              ))}
            </ul>

            <div className="modal-price">
              <strong>{product.price}</strong>
              {product.oldNum > product.priceNum && (
                <>
                  <s>{product.old}</s>
                  <span className="save">Save £{(product.oldNum - product.priceNum).toFixed(2)}</span>
                </>
              )}
              <span className="instock"><Check size={14} /> In stock</span>
            </div>

            <div className="modal-moq">
              Wholesale only · Minimum order <b>{moq} pcs</b>
            </div>

            <div className="modal-actions">
              <a href={enquiryMailto} className="btn btn-primary">
                <MessageSquare size={18} /> Enquire
              </a>
              <a href={`mailto:${SITE.email}`} className="btn btn-outline">
                <Mail size={18} /> Email us
              </a>
            </div>
            <p className="modal-note">
              Clicking <b>Enquire</b> emails your request to {SITE.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
