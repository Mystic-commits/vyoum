import { useRef, useEffect } from "react";
import { T } from "../theme/tokens";

export function Cursor() {
  const dot  = useRef(null);
  const ring = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const lag   = useRef({ x: 0, y: 0 });
  const raf   = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top  = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMove);

    const loop = () => {
      lag.current.x += (mouse.current.x - lag.current.x) * 0.1;
      lag.current.y += (mouse.current.y - lag.current.y) * 0.1;
      if (ring.current) {
        ring.current.style.left = lag.current.x + "px";
        ring.current.style.top  = lag.current.y + "px";
      }
      raf.current = requestAnimationFrame(loop);
    };
    loop();

    const grow = () => {
      if (dot.current)  { dot.current.style.width  = "14px"; dot.current.style.height = "14px"; dot.current.style.background = T.violet; }
      if (ring.current) { ring.current.style.width = "52px";  ring.current.style.height = "52px";  ring.current.style.opacity = "0.15"; ring.current.style.borderColor = T.violet; }
    };
    const shrink = () => {
      if (dot.current)  { dot.current.style.width  = "7px";  dot.current.style.height = "7px";  dot.current.style.background = T.ink; }
      if (ring.current) { ring.current.style.width = "32px";  ring.current.style.height = "32px";  ring.current.style.opacity = "0.25"; ring.current.style.borderColor = T.ink; }
    };

    document.querySelectorAll("a,button,[role=button]").forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const base = {
    position: "fixed", borderRadius: "50%",
    pointerEvents: "none", transform: "translate(-50%,-50%)",
    transition: "width 0.3s, height 0.3s, opacity 0.3s, border-color 0.3s, background 0.3s",
  };

  return (
    <>
      <div className="cur" ref={dot} style={{ ...base, width: 7, height: 7, background: T.ink, zIndex: 9999 }} />
      <div className="cur-ring" ref={ring} style={{ ...base, width: 32, height: 32, border: `1px solid ${T.ink}`, opacity: 0.25, zIndex: 9998 }} />
    </>
  );
}
