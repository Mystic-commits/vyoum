import { T } from "../theme/tokens";

export function Contact() {
  return (
    <section id="contact" style={{
      background: T.ink, padding: "8rem 4%",
      position: "relative", overflow: "hidden",
    }}>
      {/* Subtle violet glow */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(91,79,255,0.12), transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "6rem", alignItems: "center",
        }} className="reveal">
          <div>
            <div style={{
              display: "flex", alignItems: "center", gap: "0.75rem",
              marginBottom: "2rem",
            }}>
              <div style={{ width: 24, height: 1, background: T.violet }} />
              <span style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "0.7rem", fontWeight: 600,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: T.violet,
              }}>Start a project</span>
            </div>

            <h2 style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(2.8rem, 5vw, 5rem)",
              fontWeight: 800, letterSpacing: "-0.025em",
              color: "#ffffff", lineHeight: 1.0,
              marginBottom: "1.5rem",
            }}>
              Let's build<br />
              something<br />
              <span style={{ color: T.violet }}>you're proud of.</span>
            </h2>

            <p style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "1rem", fontWeight: 400,
              color: "rgba(255,255,255,0.5)", lineHeight: 1.75,
              maxWidth: 420,
            }}>
              Tell us about your project. We'll respond within 2 hours with a clear plan and honest pricing.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* WhatsApp */}
            <a href="https://wa.me/919306034858?text=Hi!%20I'd%20like%20to%20start%20a%20project%20with%20Vyoum."
              target="_blank" rel="noreferrer"
              style={{
                fontFamily: "'Satoshi', sans-serif",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: T.violet, color: T.white,
                fontSize: "0.85rem", fontWeight: 600,
                letterSpacing: "0.04em",
                padding: "1.3rem 2rem",
                borderRadius: 3, textDecoration: "none",
                transition: "transform 0.25s, box-shadow 0.25s",
                boxShadow: "0 4px 24px rgba(91,79,255,0.3)",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 40px rgba(91,79,255,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(91,79,255,0.3)"; }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Start on WhatsApp
              </span>
              <span>→</span>
            </a>

            {/* Email */}
            <a href="mailto:yugjohri520@gmail.com"
              style={{
                fontFamily: "'Satoshi', sans-serif",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "transparent", color: "rgba(255,255,255,0.7)",
                fontSize: "0.85rem", fontWeight: 500,
                letterSpacing: "0.04em",
                padding: "1.3rem 2rem",
                borderRadius: 3, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)",
                transition: "all 0.25s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
            >
              <span>yugjohri520@gmail.com</span>
              <span style={{ fontSize: "0.9rem" }}>↗</span>
            </a>

            {/* Info line */}
            <div style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "0.72rem", fontWeight: 400,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.06em",
              paddingTop: "0.5rem",
            }}>
              We respond within 2 hours · Based in India · Available worldwide
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
