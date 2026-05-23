import { Countdown } from "./Countdown";
import { OrnamentDivider } from "./OrnamentDivider";
import { Reveal } from "./Reveal";
import lamp from "@/assets/sacred-lamp.jpg";

export const CEREMONY_DATE = new Date("2026-08-14T07:30:00");

export function Hero() {
  return (
    <section className="relative min-h-screen bg-maroon-radial overflow-hidden pt-16 pb-24">
      {/* Decorative side lamps */}
      <div
        className="hidden lg:block absolute left-0 top-1/4 w-64 h-[60vh] opacity-40 animate-flicker"
        style={{
          backgroundImage: `url(${lamp})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div
        className="hidden lg:block absolute right-0 top-1/4 w-64 h-[60vh] opacity-40 animate-flicker"
        style={{
          backgroundImage: `url(${lamp})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scaleX(-1)",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          animationDelay: "1s",
        }}
      />

      {/* Top sacred glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] -z-0"
        style={{
          background:
            "radial-gradient(ellipse at top, oklch(0.86 0.12 85 / 0.25), transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        <Reveal>
          <div className="font-tamil text-gold/90 text-base md:text-lg tracking-[0.2em] mb-4 animate-drift">
            ॥ ஶுபமஸ்து ॥
          </div>
        </Reveal>

        <Reveal delay={120}><OrnamentDivider label="Gruhapravesam" /></Reveal>

        <Reveal delay={200}>
          <p className="font-display italic text-ivory/80 text-lg md:text-xl mb-6">
            With the blessings of our elders and the grace of the Divine,
          </p>
        </Reveal>

        <Reveal delay={300}>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-gold-gradient animate-shimmer leading-[1.05] mb-4"
              style={{
                backgroundImage: "linear-gradient(110deg, oklch(0.86 0.12 85), oklch(0.95 0.15 85), oklch(0.70 0.16 70), oklch(0.95 0.15 85), oklch(0.86 0.12 85))",
              }}
          >
            Ramanathan &amp; Lakshmi
          </h2>
        </Reveal>

        <Reveal delay={450}>
          <p className="font-display text-xl md:text-2xl text-ivory mb-2">
            joyfully invite you to the housewarming of
          </p>
          <p className="font-display text-3xl md:text-4xl text-gold mb-10 italic">
            ✦ Sri Mahalakshmi Nilayam ✦
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="font-tamil text-gold-soft text-lg md:text-2xl mb-2">
            எங்கள் புதிய இல்லத்திற்கு அன்புடன் வரவேற்கிறோம்
          </div>
          <div className="font-display italic text-muted-foreground mb-12">
            (We warmly welcome you to our new home)
          </div>
        </Reveal>

        {/* Muhurtham card */}
        <Reveal delay={750}>
          <div className="relative glass-gold rounded-2xl px-8 py-8 max-w-2xl mx-auto shadow-elegant mb-12 group hover:shadow-gold transition-shadow duration-700">
            <span className="absolute -inset-px rounded-2xl pointer-events-none animate-ring border border-gold/40" />
            <div className="text-xs font-sans-ui tracking-[0.3em] text-gold uppercase mb-3">
              ✦ Auspicious Muhurtham ✦
            </div>
            <div className="font-display text-3xl md:text-4xl text-ivory mb-2">
              Friday, August 14, 2026
            </div>
            <div className="font-display text-xl md:text-2xl text-gold-gradient mb-3">
              7:30 AM – 8:42 AM
            </div>
            <div className="font-tamil text-sm text-muted-foreground">
              ஶுபமுகூர்த்தம் · Vrishabha Lagnam · Hastha Nakshatram
            </div>
          </div>
        </Reveal>

        <Reveal delay={900}><Countdown target={CEREMONY_DATE} /></Reveal>
      </div>
    </section>
  );
}
