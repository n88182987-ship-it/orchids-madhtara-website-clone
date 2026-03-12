import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { productMap, allProducts, BASE } from './data'
import './ProductPage.css'

export default function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = productMap[id]

  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [pincode, setPincode] = useState('')
  const [pincodeMsg, setPincodeMsg] = useState('')

  if (!product) {
    return (
      <div className="pp-not-found">
        <h2>Product not found</h2>
        <Link to="/" className="btn-back">← Back to Home</Link>
      </div>
    )
  }

  // Related products — same collection, exclude current
  const related = allProducts
    .filter(p => p.collection === product.collection && p.id !== product.id)
    .slice(0, 4)

  function handleAddToCart() {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  function checkPincode() {
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setPincodeMsg('✅ Delivery available to ' + pincode + ' in 4–7 days')
    } else {
      setPincodeMsg('Please enter a valid 6-digit pincode')
    }
  }

  const collectionLabel = {
    anklet: 'Anklets', braclets: 'Bracelets', earings: 'Earings',
    pendant: 'Pendants', 'pendant-set': 'Pendant Sets', studds: 'Studs',
  }[product.collection] || 'Collection'

  return (
    <div className="pp-wrap">
      {/* Breadcrumb */}
      <nav className="pp-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to={`/collections/${product.collection}`}>{collectionLabel}</Link>
        <span>/</span>
        <span>{product.title}</span>
      </nav>

      <div className="pp-main">
        {/* Left — Image */}
        <div className="pp-images">
          <div className="pp-img-main">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="pp-img-thumbs">
            {[product.img, product.img, product.img].map((src, i) => (
              <div key={i} className="pp-thumb active">
                <img src={src} alt={product.title} />
              </div>
            ))}
          </div>
        </div>

        {/* Right — Details */}
        <div className="pp-details">
          <p className="pp-collection">{collectionLabel}</p>
          <h1 className="pp-title">{product.title}</h1>

          <div className="pp-price-row">
            <span className="pp-price">{product.price}</span>
            <span className="pp-tax-note">Inclusive of all taxes</span>
          </div>

          <div className="pp-stars">
            {'★★★★★'}
            <span>(24 reviews)</span>
          </div>

          <p className="pp-desc">{product.desc}</p>

          <div className="pp-meta">
            <div className="pp-meta-row">
              <span className="pp-meta-label">Material</span>
              <span>{product.material}</span>
            </div>
            <div className="pp-meta-row">
              <span className="pp-meta-label">Weight</span>
              <span>{product.weight}</span>
            </div>
            <div className="pp-meta-row">
              <span className="pp-meta-label">SKU</span>
              <span>MDH-{id.slice(0, 8).toUpperCase()}</span>
            </div>
          </div>

          {/* Qty + Add to Cart */}
          <div className="pp-actions">
            <div className="pp-qty">
              <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => q + 1)}>+</button>
            </div>
            <button
              className={`pp-add-btn ${added ? 'added' : ''}`}
              onClick={handleAddToCart}
            >
              {added ? '✓ Added to Cart!' : 'Add to Cart'}
            </button>
          </div>

          <a
            href={`${BASE}/products/${id}`}
            target="_blank"
            rel="noreferrer"
            className="pp-buy-btn"
          >
            Buy on Madhtara.com →
          </a>

          {/* Pincode checker */}
          <div className="pp-pincode">
            <p className="pp-pincode-label">Check Delivery</p>
            <div className="pp-pincode-row">
              <input
                type="text"
                maxLength={6}
                placeholder="Enter pincode"
                value={pincode}
                onChange={e => { setPincode(e.target.value); setPincodeMsg('') }}
              />
              <button onClick={checkPincode}>Check</button>
            </div>
            {pincodeMsg && <p className="pp-pincode-msg">{pincodeMsg}</p>}
          </div>

          {/* Features */}
          <ul className="pp-features">
            {product.features.map(f => (
              <li key={f}>
                <span className="pp-feature-dot">✦</span>
                {f}
              </li>
            ))}
          </ul>

          {/* Share */}
          <div className="pp-share">
            <span>Share:</span>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer">Facebook</a>
            <a href={`https://wa.me/?text=${encodeURIComponent(product.title + ' ' + window.location.href)}`} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="pp-related">
          <h2>You May Also Like</h2>
          <div className="pp-related-grid">
            {related.map(rp => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="pp-related-card">
                <div className="pp-related-img">
                  <img src={rp.img} alt={rp.title} loading="lazy" />
                </div>
                <p className="pp-related-title">{rp.title}</p>
                <p className="pp-related-price">{rp.price}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
