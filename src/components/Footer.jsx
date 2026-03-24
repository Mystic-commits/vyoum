import { T } from "../theme/tokens";

export function Footer() {
  return (
    <footer style={{
      background: T.ink,
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "2.5rem 4%",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "1.5rem",
      }} className="footer-grid">
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", textDecoration: "none" }}>
          <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: T.violet }}>व्</span>
          <span style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.12em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase" }}>YOUM</span>
        </a>

        <div style={{ display: "flex", gap: "2rem" }}>
          {["Work", "Services", "Process", "Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "0.72rem", fontWeight: 400,
              letterSpacing: "0.06em", color: "rgba(255,255,255,0.3)",
              textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.7)"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.3)"}
            >{l}</a>
          ))}
        </div>

        <div style={{
          fontFamily: "'Satoshi', sans-serif",
          fontSize: "0.68rem", fontWeight: 400,
          color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em",
        }}>© 2025 Vyoum Digital Studio</div>
      </div>
    </footer>
  );
}
