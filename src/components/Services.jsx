import { useState } from "react";
import { T } from "../theme/tokens";
import { SectionLabel } from "./SectionLabel";

const SERVICES = [
  { n: "01", title: "Business Websites", desc: "Fast, clean, mobile-first websites for local businesses. Custom every time — no templates, no shortcuts." },
  { n: "02", title: "Landing Pages", desc: "Conversion-focused pages built to turn traffic into customers. Every element designed with purpose." },
  { n: "03", title: "Full-Stack Web Apps", desc: "End-to-end applications using the MERN stack and Next.js. Scalable, secure, production-grade." },
  { n: "04", title: "UI/UX Design", desc: "Interfaces people actually enjoy using. Every interaction considered, every pixel intentional." },
  { n: "05", title: "SEO & Performance", desc: "Fast sites rank higher. We optimise every build for speed, search visibility, and real results." },
  { n: "06", title: "Ongoing Support", desc: "We stay with you after launch. Updates, changes, and support — your digital presence is always current." },
];

function ServiceCard({ s, i }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`reveal reveal-delay-${(i % 3) + 1}`}
      style={{
        background: hov ? T.white : T.bg,
        padding: "2.8rem 2.5rem",
        transition: "background 0.3s",
        position: "relative", overflow: "hidden",
      }}>
      {/* top accent */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: T.violet,
        transform: hov ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
      }} />

      <div style={{
        fontFamily: "'Clash Display', sans-serif",
        fontSize: "3rem", fontWeight: 800,
        color: hov ? T.violet : T.rule,
        lineHeight: 1, marginBottom: "1.8rem",
        transition: "color 0.3s",
      }}>{s.n}</div>

      <div style={{
        fontFamily: "'Clash Display', sans-serif",
        fontSize: "1.15rem", fontWeight: 700,
        color: T.ink, marginBottom: "0.6rem",
        letterSpacing: "-0.01em", lineHeight: 1.2,
      }}>{s.title}</div>

      <p style={{
        fontFamily: "'Satoshi', sans-serif",
        fontSize: "0.83rem", fontWeight: 400,
        color: T.inkSoft, lineHeight: 1.75,
      }}>{s.desc}</p>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" style={{ padding: "8rem 4%", background: T.bgAlt, borderTop: `1px solid ${T.rule}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap",
          gap: "4rem",
          marginBottom: "6rem",
        }} className="reveal">
          <div>
            <SectionLabel>What we do</SectionLabel>
            <h2 style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontWeight: 800, letterSpacing: "-0.02em",
              color: T.ink, lineHeight: 1.0,
            }}>
              Every service<br />your business<br />
              <span style={{ color: T.violet }}>needs online.</span>
            </h2>
          </div>
          <p style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "0.95rem", fontWeight: 400,
            color: T.inkSoft, lineHeight: 1.75,
            maxWidth: 440,
            margin: 0,
          }}>
            We don't offer packages. We listen to what you actually need and build exactly that — no upselling, no fluff, just clean execution.
          </p>
        </div>

        <div className="services-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3,1fr)",
          gap: "1px", background: T.rule,
          border: `1px solid ${T.rule}`,
          borderRadius: 4, overflow: "hidden",
        }}>
          {SERVICES.map((s, i) => <ServiceCard key={s.n} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
