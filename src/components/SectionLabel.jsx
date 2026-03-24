import { T } from "../theme/tokens";

export function SectionLabel({ children }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "0.75rem",
      marginBottom: "1.2rem",
    }}>
      <div style={{ width: 20, height: 1, background: T.violet }} />
      <span style={{
        fontFamily: "'Satoshi', sans-serif",
        fontSize: "0.68rem", fontWeight: 600,
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: T.violet,
      }}>{children}</span>
    </div>
  );
}
