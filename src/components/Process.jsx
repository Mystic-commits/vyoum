import { T } from "../theme/tokens";
import { SectionLabel } from "./SectionLabel";

export function Process() {
  const steps = [
    { n: "01", title: "We listen first", desc: "Tell us about your business, your customers, and what you actually want from a website. No assumptions." },
    { n: "02", title: "We plan together", desc: "We put together a clear scope — what we'll build, what it'll look like, and when you'll have it." },
    { n: "03", title: "We build fast", desc: "Most projects delivered in 48-72 hours. You see a live preview before any final payment." },
    { n: "04", title: "You go live", desc: "We handle hosting, domain, and deployment. Your site is live and you have everything you need." },
  ];

  return (
    <section id="process" style={{ padding: "8rem 4%", background: T.bg, borderTop: `1px solid ${T.rule}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: "5rem" }} className="reveal">
          <SectionLabel>How we work</SectionLabel>
          <h2 style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "clamp(2.5rem, 4vw, 4rem)",
            fontWeight: 800, letterSpacing: "-0.02em",
            color: T.ink, lineHeight: 1.0,
          }}>
            Simple process.<br />
            <span style={{ color: T.violet }}>No surprises.</span>
          </h2>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          gap: "1px", background: T.rule,
          border: `1px solid ${T.rule}`, borderRadius: 4, overflow: "hidden",
        }}>
          {steps.map((s, i) => (
            <div key={s.n}
              className={`reveal reveal-delay-${i + 1}`}
              style={{ background: T.bg, padding: "3rem 2.5rem" }}>
              <div style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "3rem", fontWeight: 800,
                color: T.rule, lineHeight: 1, marginBottom: "2rem",
              }}>{s.n}</div>
              <div style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "1.1rem", fontWeight: 700,
                color: T.ink, marginBottom: "0.7rem", lineHeight: 1.2,
              }}>{s.title}</div>
              <p style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "0.83rem", fontWeight: 400,
                color: T.inkSoft, lineHeight: 1.75,
              }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
