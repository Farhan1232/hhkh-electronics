import { useEffect, useMemo, useState } from 'react'
import { Search, ArrowUpRight, Heart, Star, SlidersHorizontal, Plus } from 'lucide-react'
import { PRODUCTS, CATEGORIES } from '../data/products'
import ProductModal from './ProductModal'
import './Products.css'

const BATCH = 32 // ~8 rows on desktop

export default function Products() {
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const [wished, setWished] = useState({})
  const [visible, setVisible] = useState(BATCH)

  const list = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = active === 'All' || p.cat === active
      const matchQ = p.name.toLowerCase().includes(query.toLowerCase())
      return matchCat && matchQ
    })
  }, [active, query])

  // reset the visible count whenever the filter or search changes
  useEffect(() => { setVisible(BATCH) }, [active, query])

  const shown = list.slice(0, visible)

  const counts = useMemo(() => {
    const c = {}
    CATEGORIES.forEach((cat) => {
      c[cat] = cat === 'All' ? PRODUCTS.length : PRODUCTS.filter((p) => p.cat === cat).length
    })
    return c
  }, [])

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Browse the catalogue</span>
          <h2>Explore our <span className="accent">products</span></h2>
          <p>Tap any product to see full details and send us an enquiry. Wholesale only — minimum order 100 pcs.</p>
        </div>

        <div className="shop-layout">
          {/* Sidebar */}
          <aside className="sidebar">
            <div className="side-search">
              <Search size={17} />
              <input
                placeholder="Search…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="side-title"><SlidersHorizontal size={15} /> Categories</div>
            <ul className="side-list">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <button
                    className={`side-item ${active === cat ? 'active' : ''}`}
                    onClick={() => setActive(cat)}
                  >
                    <span className="dot" />
                    {cat}
                    <em>{counts[cat]}</em>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Grid */}
          <div className="shop-main">
            <div className="shop-bar">
              <span className="result-count">
                Showing {Math.min(visible, list.length)} of {list.length} products
              </span>
              <div className="top-search">
                <Search size={16} />
                <input
                  placeholder="Search products…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>

            {list.length === 0 ? (
              <p className="empty">No products match your search.</p>
            ) : (
              <div className="card-grid">
                {shown.map((p, i) => (
                  <article
                    key={p.id}
                    className="wcard"
                    style={{ animationDelay: `${Math.min(i, 12) * 45}ms` }}
                    onClick={() => setSelected(p)}
                  >
                    <div className="wcard-media">
                      <button
                        className={`wcard-fav ${wished[p.id] ? 'on' : ''}`}
                        aria-label="Wishlist"
                        onClick={(e) => {
                          e.stopPropagation()
                          setWished((w) => ({ ...w, [p.id]: !w[p.id] }))
                        }}
                      >
                        <Heart size={16} fill={wished[p.id] ? 'currentColor' : 'none'} />
                      </button>
                      <span className="wcard-open"><ArrowUpRight size={16} /></span>
                      <img
                        src={p.image}
                        alt={p.name}
                        className="wcard-img"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <span className="wcard-label">{p.brand}</span>
                    <h3>{p.name}</h3>
                    <div className="wcard-foot">
                      <span className="wcard-price">{p.price}</span>
                      {p.rating > 0 && (
                        <span className="wcard-rate"><Star size={13} fill="currentColor" /> {p.rating}</span>
                      )}
                    </div>
                    <span className="wcard-moq">MOQ {p.moq} pcs</span>
                  </article>
                ))}
              </div>
            )}

            {list.length > visible && (
              <div className="load-more-wrap">
                <button className="load-more" onClick={() => setVisible((v) => v + BATCH)}>
                  <Plus size={18} /> Load more products
                  <span className="load-more-count">{list.length - visible} left</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <ProductModal
        product={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  )
}
