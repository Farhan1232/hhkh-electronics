import { Star, Quote } from 'lucide-react'
import './Reviews.css'

const REVIEWS = [
  { name: 'Sarah Thompson', city: 'London', rating: 5, initials: 'ST', color: '#ff5f6d',
    text: 'Ordered the AuraPods Pro and they arrived next day. Genuine product, brilliant sound and the support team answered all my questions. Couldn’t be happier!' },
  { name: 'James Patel', city: 'Manchester', rating: 5, initials: 'JP', color: '#2193b0',
    text: 'Best price I found anywhere for the NovaPhone X, and it came sealed with full warranty. This is now my go-to electronics shop.' },
  { name: 'Emily Carter', city: 'Birmingham', rating: 4, initials: 'EC', color: '#7f53ac',
    text: 'Lovely experience from start to finish. The website is so easy to use and checkout took seconds. My laptop is fantastic.' },
  { name: 'David Wilson', city: 'Slough', rating: 5, initials: 'DW', color: '#11998e',
    text: 'Local company that really cares. I emailed about a smartwatch and got a reply within the hour. Fast delivery and great prices.' },
  { name: 'Aisha Khan', city: 'Leeds', rating: 5, initials: 'AK', color: '#f7971e',
    text: 'I’ve ordered three times now — speakers, a charger and a drone. Everything genuine, well packaged and delivered on time. Highly recommend.' },
  { name: 'Tom Bennett', city: 'Bristol', rating: 4, initials: 'TB', color: '#c31432',
    text: 'Great selection and honest advice. They helped me pick the right gaming headset for my budget. Will definitely shop here again.' },
]

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Reviews</span>
          <h2>What our <span className="accent">customers</span> say</h2>
          <p>Rated 4.9 out of 5 from over 89,000 verified customers across the UK.</p>
        </div>

        <div className="review-grid">
          {REVIEWS.map((r, i) => (
            <article className="review-card reveal" key={r.name} style={{ transitionDelay: `${i * 70}ms` }}>
              <Quote className="review-quote" size={34} />
              <div className="review-stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill={s < r.rating ? 'currentColor' : 'none'} />
                ))}
              </div>
              <p className="review-text">{r.text}</p>
              <div className="review-author">
                <span className="review-avatar" style={{ background: r.color }}>{r.initials}</span>
                <div>
                  <b>{r.name}</b>
                  <i>{r.city}, UK</i>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
