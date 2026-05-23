import { OrnamentDivider } from "./OrnamentDivider";

export function Venue() {
  return (
    <section className="relative py-24 px-6 bg-maroon-radial">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <OrnamentDivider label="The Venue" />
          <h2 className="font-display text-4xl md:text-6xl text-gold-gradient mb-3">
            Find Your Way Home
          </h2>
          <p className="font-display italic text-muted-foreground">
            Sri Mahalakshmi Nilayam — your blessings are the only thing we ask you to bring.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="glass-gold rounded-2xl p-8 shadow-elegant flex flex-col justify-between">
            <div>
              <div className="font-tamil text-gold text-sm tracking-[0.2em] mb-2">முகவரி</div>
              <h3 className="font-display text-3xl text-ivory mb-4">Sri Mahalakshmi Nilayam</h3>
              <address className="not-italic font-display text-lg text-muted-foreground leading-relaxed mb-6">
                No. 42, Jasmine Avenue,<br />
                Mylapore, Chennai – 600004<br />
                Tamil Nadu, India
              </address>

              <div className="space-y-3 text-sm font-sans-ui">
                <div className="flex gap-3">
                  <span className="text-gold">◈</span>
                  <div>
                    <div className="text-gold uppercase tracking-widest text-xs">Landmark</div>
                    <div className="text-ivory">Opposite Sri Kapaleeshwarar Temple</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-gold">◈</span>
                  <div>
                    <div className="text-gold uppercase tracking-widest text-xs">Parking</div>
                    <div className="text-ivory">Valet parking available on RK Mutt Road</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-gold">◈</span>
                  <div>
                    <div className="text-gold uppercase tracking-widest text-xs">Stay</div>
                    <div className="text-ivory">Accommodation arranged at The Raintree (5 min away)</div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Mylapore+Chennai"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block text-center px-6 py-3 rounded-full border-gold-strong text-gold font-sans-ui tracking-[0.25em] uppercase text-sm hover:bg-gold/10 transition-all"
            >
              Get Directions →
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden border-gold-strong shadow-elegant min-h-[400px]">
            <iframe
              title="Venue map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.123!2d80.2697!3d13.0335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzAwLjYiTiA4MMKwMTYnMTAuOSJF!5e0!3m2!1sen!2sin!4v1700000000000"
              className="absolute inset-0 w-full h-full grayscale-[20%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
