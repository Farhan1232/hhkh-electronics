import { useEffect } from 'react'
import { X, Star, ShoppingCart, Mail, Check } from 'lucide-react'
import { SITE } from '../data/site'
import Button from './Button'
import './ProductModal.css'

export default function ProductModal({ product, onClose, onAdd }) {
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

  const mailto =
    `mailto:${SITE.email}?subject=${encodeURIComponent(`Order request: ${product.name}`)}` +
    `&body=${encodeURIComponent(
      `Hello ${SITE.legalName},\n\n` +
      `I would like to place an order for the following item:\n\n` +
      `• Product: ${product.name}\n` +
      `• Category: ${product.cat}\n` +
      `• Price: ${product.price}\n` +
      `• Quantity: 1\n\n` +
      `Please confirm availability, total cost and delivery time.\n\n` +
      `My delivery address:\n\nThank you.`
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

            <div className="modal-actions">
              <a href={mailto} className="btn btn-primary">
                <Mail size={18} /> Place Order
              </a>
              <Button variant="outline" onClick={() => { onAdd?.(product); onClose() }}>
                <ShoppingCart size={18} /> Add to Cart
              </Button>
            </div>
            <p className="modal-note">
              Clicking <b>Place Order</b> emails your request to {SITE.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
