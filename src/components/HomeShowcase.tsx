import { OrnamentDivider } from "./OrnamentDivider";
import { Reveal } from "./Reveal";
import exterior from "@/assets/house-exterior.jpg";
import pooja from "@/assets/pooja-room.jpg";

const showcase = [
  { img: exterior, title: "The Entrance", caption: "Where mango leaves welcome every soul." },
  { img: pooja, title: "The Pooja Room", caption: "The beating heart of the home, where prayers rise." },
  { img: exterior, title: "Living Spaces", caption: "Silk, brass, and golden afternoon light." },
];

export function HomeShowcase() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <OrnamentDivider label="Our Dream Home" />
          <h2 className="font-display text-4xl md:text-6xl text-gold-gradient mb-3">
            Sri Mahalakshmi Nilayam
          </h2>
          <p className="font-display italic text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the rooms that will soon echo with laughter, prayers, and your footsteps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {showcase.map((s, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="group relative overflow-hidden rounded-2xl shadow-elegant border-gold aspect-[4/5] hover:shadow-gold transition-shadow duration-700">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-[1800ms] group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                {/* Sweep shine on hover */}
                <span className="absolute -inset-x-1/2 top-0 h-full w-1/2 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-[1400ms] ease-out pointer-events-none"
                  style={{ background: "linear-gradient(110deg, transparent, oklch(0.92 0.12 85 / 0.18), transparent)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center transition-transform duration-700 group-hover:-translate-y-2">
                  <h3 className="font-display text-2xl text-gold-gradient mb-1">{s.title}</h3>
                  <p className="font-display italic text-ivory/80 text-sm">{s.caption}</p>
                </div>
                <div className="absolute inset-3 border-gold rounded-xl pointer-events-none opacity-60 group-hover:opacity-100 group-hover:inset-2 transition-all duration-700" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
