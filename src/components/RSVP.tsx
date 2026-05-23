import { useState } from "react";
import { OrnamentDivider } from "./OrnamentDivider";

export function RSVP() {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-maroon-radial" />

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <OrnamentDivider label="Grace Us With Your Presence" />
          <h2 className="font-display text-4xl md:text-6xl text-gold-gradient mb-3">
            Kindly Reply
          </h2>
          <p className="font-display italic text-muted-foreground">
            Your blessings complete this home.
          </p>
        </div>

        {!sent ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="glass-gold rounded-2xl p-8 md:p-10 shadow-elegant space-y-5"
          >
            <Field label="Your Name">
              <input required className="rsvp-input" placeholder="Full name" />
            </Field>

            <Field label="Will You Join Us?">
              <div className="flex gap-3">
                {["Joyfully Yes", "With Regret, No"].map((o) => (
                  <label key={o} className="flex-1 cursor-pointer">
                    <input type="radio" name="attend" className="peer sr-only" defaultChecked={o.startsWith("Joy")} />
                    <div className="text-center px-4 py-3 rounded-lg border-gold peer-checked:bg-gold/15 peer-checked:border-gold-strong peer-checked:text-gold transition-all font-display">
                      {o}
                    </div>
                  </label>
                ))}
              </div>
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Guests">
                <input type="number" min={1} defaultValue={2} className="rsvp-input" />
              </Field>
              <Field label="Lunch Preference">
                <select className="rsvp-input">
                  <option>Traditional</option>
                  <option>Jain</option>
                  <option>No preference</option>
                </select>
              </Field>
            </div>

            <Field label="Accommodation">
              <select className="rsvp-input">
                <option>Not required</option>
                <option>Required (1 night)</option>
                <option>Required (2+ nights)</option>
              </select>
            </Field>

            <Field label="A Special Blessing">
              <textarea rows={3} className="rsvp-input resize-none" placeholder="Leave a wish for our new home…" />
            </Field>

            <button
              type="submit"
              className="w-full px-6 py-4 rounded-full border-gold-strong glass-gold shadow-gold text-gold font-sans-ui tracking-[0.25em] uppercase text-sm hover:scale-[1.02] transition-all"
            >
              Send Our Blessings ✦
            </button>
          </form>
        ) : (
          <div className="glass-gold rounded-2xl p-12 text-center shadow-gold animate-rise">
            <div className="text-6xl mb-4">🎆</div>
            <h3 className="font-display text-4xl text-gold-gradient mb-3">Heartfelt Thanks</h3>
            <p className="font-display italic text-ivory/90 mb-2">
              Your reply has reached us like a flower at the threshold.
            </p>
            <p className="font-tamil text-gold">நன்றி · Dhanyavaad</p>
          </div>
        )}
      </div>
      <style>{`
        .rsvp-input {
          width: 100%;
          background: oklch(0.18 0.03 30 / 0.6);
          border: 1px solid oklch(0.78 0.15 80 / 0.3);
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          color: oklch(0.96 0.02 80);
          font-family: var(--font-display);
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .rsvp-input:focus {
          border-color: oklch(0.78 0.15 80 / 0.8);
          box-shadow: 0 0 0 3px oklch(0.78 0.15 80 / 0.15);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-sans-ui tracking-[0.25em] text-gold uppercase mb-2">{label}</span>
      {children}
    </label>
  );
}
