import { useEffect, useMemo, useState } from "react";

export function Petals({ count = 18 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        size: 8 + Math.random() * 14,
        delay: Math.random() * 12,
        duration: 14 + Math.random() * 14,
        opacity: 0.5 + Math.random() * 0.5,
        hue: Math.random() > 0.6 ? "gold" : "ivory",
        key: i,
      })),
    [count, mounted]
  );

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
      {petals.map((p) => (
        <span
          key={p.key}
          className="animate-petal absolute block rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.6,
            background:
              p.hue === "gold"
                ? "radial-gradient(circle, oklch(0.86 0.12 85 / 0.9), transparent 70%)"
                : "radial-gradient(circle, oklch(0.96 0.02 80 / 0.9), transparent 70%)",
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
}
