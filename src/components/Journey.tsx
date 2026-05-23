import { OrnamentDivider } from "./OrnamentDivider";
import { Reveal } from "./Reveal";

const steps = [
  { title: "A Dream Begins", caption: "Where every prayer planted a seed of hope.", year: "2019" },
  { title: "Sacred Land", caption: "Blessed soil, chosen with elders' guidance.", year: "2021" },
  { title: "Stone by Stone", caption: "Walls rising like a quiet hymn at dawn.", year: "2023" },
  { title: "Light & Bloom", caption: "Interiors warmed with silk, brass, and grace.", year: "2024" },
  { title: "The Threshold", caption: "Mango leaves, kolam, and waiting jasmine.", year: "2025" },
  { title: "Gruhapravesam", caption: "We step in — together, blessed, and grateful.", year: "2026" },
];

export function Journey() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <OrnamentDivider label="Our Sacred Journey" />
        <h2 className="font-display text-4xl md:text-6xl text-gold-gradient mb-4">
          From a Dream to a Doorway
        </h2>
        <p className="font-display italic text-muted-foreground max-w-2xl mx-auto mb-16">
          Every brick a memory, every corner a blessing — the quiet story behind these walls.
        </p>

        <div className="relative">
          {/* Vertical sacred line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, oklch(0.78 0.15 80 / 0.6), oklch(0.78 0.15 80 / 0.6), transparent)",
            }}
          />

          <div className="space-y-12">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"} text-center`}>
                  <div className="inline-block font-sans-ui text-xs tracking-[0.3em] text-gold uppercase mb-2">
                    {s.year}
                  </div>
                  <h3 className="font-display text-2xl md:text-4xl text-ivory mb-2">{s.title}</h3>
                  <p className="font-display italic text-muted-foreground">{s.caption}</p>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-6 h-6 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gold/30 animate-glow" />
                  <div className="relative w-3 h-3 rounded-full bg-gold shadow-gold" />
                </div>

                <div className={`hidden md:block ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-gold rounded-lg p-6 inline-block">
                    <div className="font-tamil text-gold text-lg">✦</div>
                    <div className="font-display text-gold-gradient text-xl mt-1">Chapter {i + 1}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
