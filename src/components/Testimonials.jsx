import { T } from "../theme/tokens";
import { SectionLabel } from "./SectionLabel";

const REVIEWS = [
  {
    quote: "Our new website launched in exactly 5 days and immediately increased our inbound leads by 40%. The speed and quality are unmatched.",
    author: "Rahul S.",
    role: "Founder, TechStart MVP"
  },
  {
    quote: "Vyoum didn't just build a website; they solved our digital branding problem. We finally look as premium online as we do in person.",
    author: "Aman T.",
    role: "Director, Tomar Events"
  },
  {
    quote: "I've worked with agencies that took months to deliver less. The 5-day turnaround is real, and the conversion focus is exactly what we needed.",
    author: "Dr. Sharma",
    role: "BioEra Institute"
  }
];

export function Testimonials() {
  return (
    <section id="proof" style={{ padding: "8rem 4%", background: T.bg, borderTop: `1px solid ${T.rule}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap",
          gap: "4rem", marginBottom: "5rem",
        }} className="reveal">
          <div>
            <SectionLabel>Client Results</SectionLabel>
            <h2 style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontWeight: 800, letterSpacing: "-0.02em",
              color: T.ink, lineHeight: 1.0,
            }}>
              Don't just take<br />our word for it.
            </h2>
          </div>
          <p style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "0.95rem", fontWeight: 400,
            color: T.inkSoft, lineHeight: 1.75,
            maxWidth: 440,
            margin: 0,
          }}>
            Real results from real businesses. We prioritize speed without sacrificing quality, ensuring you get a high-converting asset when you need it.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}>
          {REVIEWS.map((r, i) => (
            <div key={i} className={`reveal reveal-delay-${(i % 3) + 1}`} style={{
              background: T.bgAlt, padding: "2.5rem", borderRadius: 4,
              border: `1px solid ${T.rule}`,
              display: "flex", flexDirection: "column", justifyContent: "space-between"
            }}>
              <p style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "1.05rem", fontWeight: 500,
                color: T.ink, lineHeight: 1.6, marginBottom: "2rem",
                fontStyle: "italic"
              }}>
                "{r.quote}"
              </p>
              <div>
                <div style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "1.1rem", fontWeight: 700,
                  color: T.ink, letterSpacing: "-0.01em"
                }}>{r.author}</div>
                <div style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "0.8rem", fontWeight: 500,
                  color: T.inkSoft, marginTop: "0.2rem"
                }}>{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
