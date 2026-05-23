import { OrnamentDivider } from "./OrnamentDivider";

export function Footer() {
  return (
    <footer className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{
        background: "radial-gradient(ellipse at bottom, oklch(0.30 0.10 25) 0%, oklch(0.12 0.04 25) 80%)",
      }} />

      <div className="max-w-3xl mx-auto text-center">
        <div className="text-5xl mb-6 animate-flicker">🪔</div>
        <OrnamentDivider />

        <p className="font-tamil text-gold-soft text-lg md:text-xl mb-4 leading-relaxed">
          லோகாஃ ஸமஸ்தாஃ ஸுகிநோ பவந்து
        </p>
        <p className="font-display italic text-2xl md:text-3xl text-ivory mb-2">
          May all the worlds be filled with happiness.
        </p>
        <p className="font-display text-muted-foreground mb-10">
          Thank you for walking this journey with us. Our doors — and our hearts — are open.
        </p>

        <div className="font-display text-3xl md:text-4xl text-gold-gradient mb-2">
          ~ Ramanathan &amp; Lakshmi ~
        </div>
        <div className="font-display italic text-muted-foreground">
          with the Iyengar family
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-xs font-sans-ui tracking-[0.2em] uppercase text-gold/70">
          <a href="#" className="hover:text-gold transition-colors">Share on WhatsApp</a>
          <span>·</span>
          <a href="#" className="hover:text-gold transition-colors">Save as Image</a>
          <span>·</span>
          <a href="#" className="hover:text-gold transition-colors">Add to Calendar</a>
          <span>·</span>
          <a href="#" className="hover:text-gold transition-colors">Live Stream</a>
        </div>

        <div className="mt-10 text-xs text-muted-foreground font-sans-ui tracking-widest">
          ✦ Crafted with devotion · Gruhapravesam 2026 ✦
        </div>
      </div>
    </footer>
  );
}
