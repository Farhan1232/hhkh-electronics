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

const PRODUCTS = []
for (const [key, cfg] of Object.entries(CATS)) {
  for (const p of data[key] || []) {
    PRODUCTS.push({
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
      desc:
        `${p.title} — a genuine ${p.brand || 'branded'} product` +
        (p.rating ? `, rated ${p.rating}/5 from ${p.reviews} customer reviews` : '') +
        `. In stock now with free, fast UK delivery from hhkh.`,
      specs: {
        Brand: p.brand || '—',
        Rating: p.rating ? `${p.rating} / 5` : '—',
        Reviews: String(p.reviews || 0),
        'Ref #': p.product_id,
      },
    })
  }
}

export const CATEGORIES = ['All', ...Object.values(CATS).map((c) => c.label)]
export { PRODUCTS }
