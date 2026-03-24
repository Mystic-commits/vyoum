import { T } from "../theme/tokens";

export function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      padding: "68px 4% 0",
      display: "flex", flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      background: T.bg,
    }}>
      {/* Subtle grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(${T.rule} 1px, transparent 1px),
          linear-gradient(90deg, ${T.rule} 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        opacity: 0.4,
      }} />

      {/* Violet gradient hint top right */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: 600, height: 600,
        background: `radial-gradient(ellipse at top right, rgba(91,79,255,0.06), transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", width: "100%", padding: "0 2%" }}>

        {/* Eyebrow */}
        <div className="stagger-1" style={{
          display: "inline-flex", alignItems: "center", gap: "0.75rem",
          marginBottom: "3rem",
        }}>
          <div style={{ width: 28, height: 1, background: T.violet }} />
          <span style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "0.7rem", fontWeight: 600,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: T.violet,
          }}>Digital Studio — Crafted with precision</span>
        </div>

        {/* Main headline */}
        <h1 className="stagger-2" style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: "clamp(3.5rem, 6vw, 6.5rem)",
          fontWeight: 800,
          lineHeight: 0.96,
          letterSpacing: "-0.03em",
          color: T.ink,
          marginBottom: "2rem",
          maxWidth: "18ch",
        }}>
          We build<br />
          high-converting websites<br />
          <span style={{ color: T.violet, fontStyle: "normal" }}>in 5 days.</span>
        </h1>

        {/* Descriptor */}
        <div className="stagger-3" style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap",
          gap: "3rem", width: "100%", marginBottom: "4rem",
        }}>
          <p style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "1.05rem", fontWeight: 400,
            color: T.inkMid, lineHeight: 1.75,
            maxWidth: 500,
          }}>
            Stop losing leads to bad design. We build premium, fast-loading websites for startups and businesses that elevate your branding and drive measurable results. Fast delivery guaranteed.
          </p>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: "1.2rem" }}>
            <a href="#work" style={{
              fontFamily: "'Satoshi', sans-serif",
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
              fontSize: "0.82rem", fontWeight: 600,
              color: T.ink, letterSpacing: "0.04em",
              padding: "1.1rem 1.8rem",
              borderRadius: 3,
              textDecoration: "none",
              transition: "all 0.25s",
              border: `1px solid ${T.rule}`,
              background: "transparent",
              width: "210px",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.ink; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.rule; e.currentTarget.style.transform = "none"; }}
            >
              View our work
            </a>
            <a href="https://wa.me/919306034858?text=Hi!%20I'd%20like%20to%20start%20a%20project%20with%20Vyoum."
              target="_blank" rel="noreferrer"
              style={{
                fontFamily: "'Satoshi', sans-serif",
                display: "inline-flex", alignItems: "center", justifyContent: "space-between",
                background: T.violet, color: T.white,
                fontSize: "0.82rem", fontWeight: 600,
                letterSpacing: "0.04em",
                padding: "1.1rem 1.8rem",
                borderRadius: 3,
                textDecoration: "none",
                transition: "transform 0.25s, box-shadow 0.25s",
                border: `1px solid ${T.violet}`,
                boxShadow: "0 4px 24px rgba(91,79,255,0.22)",
                width: "210px",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 36px rgba(91,79,255,0.32)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(91,79,255,0.22)"; }}
            >
              Get your website
              <span style={{ marginLeft: "0.75rem", fontSize: "1.1rem" }}>→</span>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="stagger-4 stat-row" style={{
          display: "flex", gap: "2rem", justifyContent: "space-between", flexWrap: "wrap",
          paddingTop: "3rem",
          borderTop: `1px solid ${T.rule}`,
        }}>
          {[
            { n: "10+",   l: "Projects completed" },
            { n: "5 Days",l: "Fast delivery promise" },
            { n: "100%",  l: "Client satisfaction" },
            { n: "MERN",  l: "High-performance stack" },
          ].map(s => (
            <div key={s.l}>
              <div style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "2rem", fontWeight: 700,
                color: T.ink, lineHeight: 1,
                letterSpacing: "-0.02em",
              }}>{s.n}</div>
              <div style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "0.7rem", fontWeight: 500,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: T.inkGhost, marginTop: "0.3rem",
              }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom rule line */}
      <div style={{
        position: "absolute", bottom: 0, left: "4%", right: "4%",
        height: 1, background: T.rule,
      }} />
    </section>
  );
}
