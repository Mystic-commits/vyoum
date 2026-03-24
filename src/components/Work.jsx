import { useState, useRef } from "react";
import { T } from "../theme/tokens";
import { SectionLabel } from "./SectionLabel";

const PROJECTS = [
  {
    index: "01",
    name: "BioEra Institute",
    category: "Education — NEET Coaching",
    year: "2025",
    desc: {
      problem: "A 29-year legacy coaching institute lacked a digital presence that matched their real-world credibility.",
      built: "A premium dark-theme website designed specifically for lead generation.",
      result: "Positioned them as the premium choice and increased inquiries from parents searching online."
    },
    deliverables: ["Web Design", "Development", "Deployment"],
    link: "https://purple-essy-29.tiiny.site/",
    accent: "#1a3d2b",
  },
  {
    index: "02",
    name: "Tomar Event",
    category: "Event Management",
    year: "2025",
    desc: {
      problem: "Premium event management company struggling to convey their high-end service quality online.",
      built: "A cinematic brand website with a dark gold palette focused on visual storytelling.",
      result: "Elevated brand perception, allowing them to confidently close higher-ticket clients."
    },
    deliverables: ["Brand Identity", "Web Design", "Development"],
    link: "https://statutory-silver-z5b1nsse32.edgeone.app/",
    accent: "#7a5a1a",
  },
  {
    index: "03",
    name: "MG Photography",
    category: "Photography Studio",
    year: "2025",
    desc: {
      problem: "12 years of stunning wedding photography limited by an outdated portfolio structure.",
      built: "An editorial layout with warm amber tones and film-inspired textures.",
      result: "Created an immersive experience that dramatically improved user engagement and booking rates."
    },
    deliverables: ["Art Direction", "Web Design", "Development"],
    link: "https://motionless-tan-wtealcdpfn.edgeone.app/",
    accent: "#5a2d0a",
  },
];

function WorkRow({ p, i }) {
  const [hov, setHov] = useState(false);
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderBottom: `1px solid ${T.rule}`,
        padding: "3.5rem 0",
        display: "grid",
        gridTemplateColumns: "80px 1fr auto",
        alignItems: "start",
        gap: "3rem",
        cursor: "default",
        transition: "background 0.3s",
        background: hov ? T.bgAlt : "transparent",
        margin: "0 -4%", padding: "3.5rem 4%",
      }}
      className={`reveal reveal-delay-${i + 1}`}
    >
      {/* Index */}
      <div style={{
        fontFamily: "'Clash Display', sans-serif",
        fontSize: "0.72rem", fontWeight: 600,
        letterSpacing: "0.12em", textTransform: "uppercase",
        color: T.inkGhost, paddingTop: "0.4rem",
      }}>{p.index} / {p.year}</div>

      {/* Content */}
      <div>
        <div style={{
          display: "flex", alignItems: "center", gap: "1.5rem",
          marginBottom: "0.8rem",
        }}>
          <h3 style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 700, letterSpacing: "-0.02em",
            color: T.ink, lineHeight: 1,
            transition: "color 0.3s",
          }}
          >{p.name}</h3>
          <span style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "0.68rem", fontWeight: 500,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: T.inkGhost,
            paddingTop: "0.3rem",
          }}>{p.category}</span>
        </div>

        <div style={{
          fontFamily: "'Satoshi', sans-serif",
          fontSize: "0.9rem", fontWeight: 400,
          color: T.inkSoft, lineHeight: 1.75,
          maxWidth: 560, marginBottom: "1.5rem",
          display: "flex", flexDirection: "column", gap: "0.6rem"
        }}>
          <div><strong style={{ color: T.ink }}>Problem:</strong> {p.desc.problem}</div>
          <div><strong style={{ color: T.ink }}>What we built:</strong> {p.desc.built}</div>
          <div><strong style={{ color: T.ink }}>Result:</strong> {p.desc.result}</div>
        </div>

        <div style={{ display: "flex", gap: "0.6rem" }}>
          {p.deliverables.map(d => (
            <span key={d} style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "0.65rem", fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: T.inkMid,
              background: T.bgAlt,
              border: `1px solid ${T.rule}`,
              padding: "0.3rem 0.8rem",
              borderRadius: 2,
            }}>{d}</span>
          ))}
        </div>
      </div>

      {/* Link */}
      <a href={p.link} target="_blank" rel="noreferrer"
        style={{
          fontFamily: "'Satoshi', sans-serif",
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          fontSize: "0.75rem", fontWeight: 600,
          letterSpacing: "0.06em",
          color: hov ? T.violet : T.inkSoft,
          border: `1px solid ${hov ? T.violet : T.rule}`,
          padding: "0.75rem 1.4rem",
          borderRadius: 2,
          textDecoration: "none",
          transition: "all 0.25s",
          whiteSpace: "nowrap",
          marginTop: "0.4rem",
        }}>
        View live
        <span style={{
          display: "inline-block",
          transform: hov ? "translateX(3px) translateY(-1px)" : "none",
          transition: "transform 0.25s",
        }}>↗</span>
      </a>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" style={{ padding: "8rem 4%", background: T.bg }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap",
          gap: "4rem",
          marginBottom: "5rem",
          paddingBottom: "3.5rem",
          borderBottom: `1px solid ${T.rule}`,
        }} className="reveal">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontWeight: 800, letterSpacing: "-0.02em",
              color: T.ink, lineHeight: 1.0,
            }}>
              Built by Vyoum.<br />
              <span style={{ color: T.violet }}>Live and converting.</span>
            </h2>
          </div>
          <p style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "0.95rem", fontWeight: 400,
            color: T.inkSoft, lineHeight: 1.75,
            maxWidth: 440,
            margin: 0,
          }}>
            Every project starts with listening. We learn what you need, what your customers need, and what success actually looks like for your business — then we build exactly that.
          </p>
        </div>

        {/* Project rows */}
        {PROJECTS.map((p, i) => <WorkRow key={p.index} p={p} i={i} />)}

        <div className="reveal" style={{ marginTop: "5rem", textAlign: "center" }}>
          <a href="https://wa.me/919306034858?text=Hi!%20I'd%20like%20to%20start%20my%20project."
            target="_blank" rel="noreferrer"
            style={{
              fontFamily: "'Satoshi', sans-serif",
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.8rem",
              background: T.ink, color: T.white,
              fontSize: "0.85rem", fontWeight: 600,
              letterSpacing: "0.04em",
              padding: "1.2rem 2.4rem",
              borderRadius: 3,
              textDecoration: "none",
              transition: "transform 0.25s, box-shadow 0.25s, background 0.25s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = T.violet; e.currentTarget.style.boxShadow = "0 8px 36px rgba(91,79,255,0.32)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.background = T.ink; e.currentTarget.style.boxShadow = "none"; }}>
            Start your project
            <span style={{ fontSize: "1.1rem" }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
