import { useState } from "react";
import doors from "@/assets/hero-doors.jpg";
import { Petals } from "./Petals";

export function DoorOpening({ onEnter }: { onEnter: () => void }) {
  const [opening, setOpening] = useState(false);

  const handle = () => {
    setOpening(true);
    setTimeout(onEnter, 2400);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-maroon-radial overflow-hidden">
      <Petals count={24} />

      {/* Doors */}
      <div className="absolute inset-0 flex">
        <div
          className={`relative w-1/2 h-full overflow-hidden ${opening ? "door-left-open" : ""}`}
          style={{
            backgroundImage: `url(${doors})`,
            backgroundSize: "200% 100%",
            backgroundPosition: "left center",
            boxShadow: "inset -20px 0 60px rgba(0,0,0,0.6)",
          }}
        />
        <div
          className={`relative w-1/2 h-full overflow-hidden ${opening ? "door-right-open" : ""}`}
          style={{
            backgroundImage: `url(${doors})`,
            backgroundSize: "200% 100%",
            backgroundPosition: "right center",
            boxShadow: "inset 20px 0 60px rgba(0,0,0,0.6)",
          }}
        />
      </div>

      {/* Golden light revealed behind doors */}
      <div
        className={`absolute inset-0 -z-10 transition-opacity duration-[2000ms] ${opening ? "opacity-100" : "opacity-30"}`}
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.92 0.15 80 / 0.95), oklch(0.70 0.18 65 / 0.6) 30%, transparent 70%)",
        }}
      />

      {/* Center content */}
      {!opening && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 animate-rise">
          <div className="font-tamil text-gold text-sm md:text-base tracking-[0.3em] mb-3 opacity-90">
            ஓம் ஶ்ரீ கணேஶாய நமஃ
          </div>
          <h1 className="font-display text-4xl md:text-7xl text-gold-gradient leading-tight mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            Gruhapravesam
          </h1>
          <p className="font-display italic text-ivory/90 text-lg md:text-2xl max-w-xl mb-2">
            "May this sacred home overflow with light, love, and lasting prosperity."
          </p>
          <p className="font-tamil text-gold-soft/90 text-sm md:text-lg mb-10">
            வாழ்க வளமுடன் — Welcome to our new beginning
          </p>

          <button
            onClick={handle}
            className="group relative px-10 py-4 rounded-full border-gold-strong glass-gold shadow-gold text-gold font-sans-ui tracking-[0.25em] text-sm md:text-base uppercase hover:scale-105 transition-all duration-500"
          >
            <span className="relative z-10">Enter Our New Home</span>
            <span className="absolute inset-0 rounded-full animate-glow bg-gold/10" />
          </button>

          <div className="mt-8 text-xs text-muted-foreground tracking-widest font-sans-ui uppercase opacity-70">
            ✦  Click the doors to begin  ✦
          </div>
        </div>
      )}

      {opening && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="font-display text-5xl md:text-8xl text-gold-gradient animate-rise drop-shadow-[0_4px_30px_rgba(255,200,80,0.6)]">
            Welcome
          </div>
        </div>
      )}
    </div>
  );
}
