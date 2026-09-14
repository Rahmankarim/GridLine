import Link from "next/link"
export function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div><Link href="/" className="brand footer-brand"><span className="brand-mark"><span /></span><span>gridline<span className="brand-dot">.</span></span></Link><p className="footer-note">The operating system for<br />a more efficient world.</p></div>
    <div className="footer-links"><div><p className="eyebrow">Explore</p><Link href="/products">Platform</Link><Link href="/about">About us</Link><Link href="/contact">Contact</Link></div><div><p className="eyebrow">Connect</p><a href="mailto:hello@gridline.energy">hello@gridline.energy</a><a href="https://linkedin.com" aria-label="LinkedIn">LinkedIn ↗</a></div></div>
    <div className="footer-bottom"><span>© 2026 Gridline Energy</span><span>Built for better energy.</span></div>
  </div></footer>
}
