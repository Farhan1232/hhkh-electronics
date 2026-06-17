import { Tv, Headphones, Printer, HardDrive } from 'lucide-react'
import data from './argos.json'

/**
 * Real product data scraped into argos.json, normalised into the shape
 * the storefront uses. Categories are remapped to friendly labels.
 */
const CATS = {
  tv:               { label: 'TVs',        icon: Tv,         grad: ['#2193b0', '#6dd5ed'] },
  headphones:       { label: 'Headphones', icon: Headphones, grad: ['#ee0979', '#ff6a00'] },
  office_equipment: { label: 'Office',     icon: Printer,    grad: ['#7f53ac', '#647dee'] },
  servers_storage:  { label: 'Storage',    icon: HardDrive,  grad: ['#11998e', '#38ef7d'] },
}

const num = (s) => (s ? parseFloat(String(s).replace(/[^0-9.]/g, '')) : null)

// Minimum order quantity — hhkh sells wholesale only.
export const MOQ = 100

// Build one list per category first…
const byCat = []
for (const [key, cfg] of Object.entries(CATS)) {
  const items = (data[key] || []).map((p) => ({
    id: `${key}-${p.product_id}`,
    name: p.title,
    brand: p.brand || 'hhkh',
    cat: cfg.label,
    icon: cfg.icon,
    grad: cfg.grad,
    image: p.image,
    url: p.url,
    price: p.price,                 // already formatted, e.g. "£19.99"
    priceNum: num(p.price),
    old: p.was_price,               // usually null
    oldNum: num(p.was_price),
    rating: p.rating || 0,
    reviews: p.reviews || 0,
    moq: MOQ,
    desc:
      `${p.title} — a genuine ${p.brand || 'branded'} product` +
      (p.rating ? `, rated ${p.rating}/5 from ${p.reviews} customer reviews` : '') +
      `. Available wholesale from hhkh with a minimum order of ${MOQ} pcs, ` +
      `fast UK delivery.`,
    specs: {
      Brand: p.brand || '—',
      'Min. order': `${MOQ} pcs`,
      Rating: p.rating ? `${p.rating} / 5` : '—',
      'Ref #': p.product_id,
    },
  }))
  byCat.push(items)
}

// …then round-robin merge them so the home grid shows a MIX of categories
// (TVs, headphones, office and storage), not a long run of TVs first.
const PRODUCTS = []
const maxLen = Math.max(0, ...byCat.map((a) => a.length))
for (let i = 0; i < maxLen; i++) {
  for (const list of byCat) {
    if (list[i]) PRODUCTS.push(list[i])
  }
}

export const CATEGORIES = ['All', ...Object.values(CATS).map((c) => c.label)]
export { PRODUCTS }
