import { useEffect, useState } from "react";

export function Countdown({ target }: { target: Date }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target.getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const items = [
    { v: d, l: "Days" },
    { v: h, l: "Hours" },
    { v: m, l: "Minutes" },
    { v: s, l: "Seconds" },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto">
      {items.map((it) => (
        <div
          key={it.l}
          className="glass-gold rounded-lg px-2 py-4 md:py-6 text-center shadow-elegant"
        >
          <div className="font-display text-3xl md:text-5xl text-gold-gradient tabular-nums">
            {String(it.v).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm font-sans-ui tracking-[0.2em] text-muted-foreground mt-1 uppercase">
            {it.l}
          </div>
        </div>
      ))}
    </div>
  );
}
