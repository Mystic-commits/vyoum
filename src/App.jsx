import { useEffect } from "react";
import { useReveal } from "./hooks/useReveal";
import { T } from "./theme/tokens";

import { Cursor } from "./components/Cursor";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Work } from "./components/Work";
import { Testimonials } from "./components/Testimonials";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useReveal();

  useEffect(() => {
    document.title = "Vyoum — Digital Studio";
  }, []);

  return (
    <div style={{ background: T.bg, minHeight: "100vh" }}>
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <Testimonials />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
