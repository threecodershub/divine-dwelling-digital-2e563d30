import { OrnamentDivider } from "./OrnamentDivider";
import lamp from "@/assets/sacred-lamp.jpg";

export function SacredHighlight() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.30 0.10 25) 0%, oklch(0.14 0.04 25) 70%)",
        }}
      />
      {/* Floating lotus glow */}
      <div
        className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-40 animate-glow"
        style={{
          background: "radial-gradient(circle, oklch(0.86 0.12 85 / 0.4), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full opacity-40 animate-glow"
        style={{
          background: "radial-gradient(circle, oklch(0.58 0.14 45 / 0.4), transparent 70%)",
          animationDelay: "2s",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <OrnamentDivider label="The Sacred Moment" />

        <div className="relative inline-block mb-8">
          <img
            src={lamp}
            alt="Sacred kuthuvilakku oil lamp"
            width={400}
            height={600}
            loading="lazy"
            className="mx-auto h-72 w-auto object-cover rounded-full shadow-gold animate-flicker"
            style={{
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            }}
          />
        </div>

        <div className="font-tamil text-gold text-lg md:text-xl mb-4 leading-relaxed">
          ஸர்வே ஜநாஃ ஸுகிநோ பவந்து
        </div>
        <p className="font-display italic text-2xl md:text-3xl text-ivory mb-4 leading-snug">
          "May all beings everywhere be happy and free."
        </p>
        <p className="font-display text-muted-foreground max-w-2xl mx-auto">
          As we light the first lamp of our new home, we carry forward the warmth of
          generations — the prayers of our parents, the wisdom of our elders, and the
          love of every soul who has walked beside us.
        </p>

        <div className="mt-10 inline-flex items-center gap-4 glass-gold rounded-full px-8 py-4 shadow-gold">
          <span className="text-gold text-2xl">🪔</span>
          <span className="font-display text-gold-gradient text-xl md:text-2xl tracking-wide">
            7:30 AM — The First Step Within
          </span>
          <span className="text-gold text-2xl">🪔</span>
        </div>
      </div>
    </section>
  );
}
