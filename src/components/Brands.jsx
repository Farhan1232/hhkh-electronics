import {
  SiApple, SiSamsung, SiSony, SiLg, SiHp,
  SiEpson, SiToshiba, SiJbl, SiBose, SiSennheiser, SiBeats,
} from 'react-icons/si'
import './Brands.css'

// each brand in its official logo colour
const BRANDS = [
  { Icon: SiApple, name: 'Apple', color: '#555555' },
  { Icon: SiSamsung, name: 'Samsung', color: '#1428A0' },
  { Icon: SiSony, name: 'Sony', color: '#000000' },
  { Icon: SiLg, name: 'LG', color: '#A50034' },
  { Icon: SiHp, name: 'HP', color: '#0096D6' },
  { Icon: SiEpson, name: 'Epson', color: '#003399' },
  { Icon: SiToshiba, name: 'Toshiba', color: '#FF0000' },
  { Icon: SiJbl, name: 'JBL', color: '#FF3300' },
  { Icon: SiBose, name: 'Bose', color: '#000000' },
  { Icon: SiSennheiser, name: 'Sennheiser', color: '#000000' },
  { Icon: SiBeats, name: 'Beats', color: '#E1251B' },
]

export default function Brands() {
  const row = [...BRANDS, ...BRANDS]
  return (
    <section className="brands" aria-label="Brands we stock">
      <div className="container">
        <p className="brands-title">Trusted brands we stock</p>
      </div>
      <div className="brand-marquee">
        <div className="brand-track">
          {row.map((b, i) => (
            <span className="brand-item" key={i} title={b.name} style={{ color: b.color }}>
              <b.Icon />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
