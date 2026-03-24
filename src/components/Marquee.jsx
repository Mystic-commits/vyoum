import { T } from "../theme/tokens";

export function Marquee() {
  const items = [
    "React.js", "Next.js", "Node.js", "MongoDB", "Express.js",
    "Tailwind CSS", "MERN Stack", "Web Design", "Landing Pages",
    "Full-Stack", "SEO", "Performance", "UI/UX", "Vercel",
    "React.js", "Next.js", "Node.js", "MongoDB", "Express.js",
    "Tailwind CSS", "MERN Stack", "Web Design", "Landing Pages",
    "Full-Stack", "SEO", "Performance", "UI/UX", "Vercel",
  ];

  return (
    <div style={{
      borderTop: `1px solid ${T.rule}`,
      borderBottom: `1px solid ${T.rule}`,
      padding: "1rem 0", overflow: "hidden",
      background: T.bg,
    }}>
      <div style={{
        display: "flex", gap: "3.5rem",
        animation: "marquee 30s linear infinite",
        whiteSpace: "nowrap",
      }}>
        {items.map((item, i) => (
          <span key={i} style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "0.72rem", fontWeight: 500,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: T.inkGhost, flexShrink: 0,
            display: "flex", alignItems: "center", gap: "1.2rem",
          }}>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: T.violet, display: "inline-block", opacity: 0.5 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
