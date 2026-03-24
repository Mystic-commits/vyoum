import { useState, useEffect } from "react";
import { T } from "../theme/tokens";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Work", "Services", "Process", "Contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 800,
      height: 68,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 4%",
      background: scrolled ? "rgba(250,250,249,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? `1px solid ${T.rule}` : "1px solid transparent",
      transition: "all 0.5s ease",
      animation: "navIn 0.7s 0.1s ease both",
    }}>
      {/* Logo */}
      <a href="#" style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", textDecoration: "none" }}>
        <span style={{
          fontFamily: "'Satoshi', sans-serif",
          fontSize: "1.5rem", fontWeight: 700,
          color: T.violet, lineHeight: 1,
          letterSpacing: "-0.01em",
        }}>व्</span>
        <span style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: "1.1rem", fontWeight: 700,
          letterSpacing: "0.12em", color: T.ink,
          lineHeight: 1, textTransform: "uppercase",
        }}>YOUM</span>
      </a>

      {/* Links */}
      <ul className="nav-links" style={{ display: "flex", listStyle: "none", gap: "2.5rem", alignItems: "center" }}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "0.78rem", fontWeight: 500,
              letterSpacing: "0.06em", color: T.inkSoft,
              textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = T.ink}
              onMouseLeave={e => e.target.style.color = T.inkSoft}
            >{l}</a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href={`https://wa.me/919306034858?text=Hi!%20I'd%20like%20to%20discuss%20a%20project%20with%20Vyoum.`}
        target="_blank" rel="noreferrer"
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontSize: "0.75rem", fontWeight: 600,
          letterSpacing: "0.06em",
          background: T.ink, color: T.white,
          padding: "0.6rem 1.5rem",
          borderRadius: 3,
          textDecoration: "none",
          transition: "background 0.25s, transform 0.25s",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = T.violet; e.currentTarget.style.transform = "translateY(-1px)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = T.ink; e.currentTarget.style.transform = "none"; }}
      >Start a project</a>
    </nav>
  );
}
