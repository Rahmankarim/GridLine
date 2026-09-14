"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "/products", label: "Platform" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><span /></span>
          <span>gridline<span className="brand-dot">.</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <button className="menu-button" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
      </nav>}
    </header>
  )
}
