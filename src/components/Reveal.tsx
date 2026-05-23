import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.98)",
        filter: visible ? "blur(0)" : "blur(6px)",
        transition: `opacity 1100ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 1100ms cubic-bezier(.2,.7,.2,1) ${delay}ms, filter 800ms ease ${delay}ms`,
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </Tag>
  );
}
