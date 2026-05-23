import { OrnamentDivider } from "./OrnamentDivider";
import { Reveal } from "./Reveal";

const events = [
  { name: "Ganapathi Homam", tamil: "கணபதி ஹோமம்", time: "6:00 AM", desc: "Invoking Lord Ganesha for an obstacle-free beginning.", icon: "🕉️" },
  { name: "Vastu Pooja", tamil: "வாஸ்து பூஜை", time: "6:45 AM", desc: "Honouring the spirit of the home and its directions.", icon: "🏛️" },
  { name: "Gruhapravesam", tamil: "க்ருஹப்ரவேஶம்", time: "7:30 AM", desc: "Sacred first step into the new home — the Muhurtham moment.", icon: "🪔" },
  { name: "Lakshmi Pooja", tamil: "லக்ஷ்மி பூஜை", time: "9:00 AM", desc: "Invoking Goddess Lakshmi for prosperity and grace.", icon: "🪷" },
  { name: "Satyanarayana Pooja", tamil: "ஸத்யநாராயண பூஜை", time: "10:30 AM", desc: "A vow of truth and gratitude to Lord Vishnu.", icon: "🌼" },
  { name: "Lunch & Reception", tamil: "விருந்து", time: "12:30 PM", desc: "Traditional South Indian feast on banana leaf.", icon: "🌿" },
];

export function Events() {
  return (
    <section className="relative py-24 px-6 bg-maroon-radial">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <OrnamentDivider label="Ceremony Schedule" />
          <h2 className="font-display text-4xl md:text-6xl text-gold-gradient mb-3">Rituals of the Day</h2>
          <p className="font-display italic text-muted-foreground max-w-2xl mx-auto">
            A day of sacred rituals, ancient mantras, and shared joy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <div
              key={e.name}
              className="group relative glass-gold rounded-xl p-6 shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Temple pillar caps */}
              <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="absolute -bottom-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-500">
                {e.icon}
              </div>
              <div className="font-tamil text-gold text-sm mb-1">{e.tamil}</div>
              <h3 className="font-display text-2xl text-ivory mb-1">{e.name}</h3>
              <div className="font-sans-ui text-xs tracking-[0.2em] text-gold uppercase mb-3">
                {e.time} · Aug 14
              </div>
              <p className="font-display italic text-muted-foreground text-sm mb-4">{e.desc}</p>

              <button className="text-xs tracking-[0.2em] font-sans-ui uppercase text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors">
                + Add to Calendar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
