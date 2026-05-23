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
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-elegant border-gold aspect-[4/5]"
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="font-display text-2xl text-gold-gradient mb-1">{s.title}</h3>
                <p className="font-display italic text-ivory/80 text-sm">{s.caption}</p>
              </div>
              <div className="absolute inset-3 border-gold rounded-xl pointer-events-none opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
