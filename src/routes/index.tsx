import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DoorOpening } from "@/components/DoorOpening";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Events } from "@/components/Events";
import { SacredHighlight } from "@/components/SacredHighlight";
import { HomeShowcase } from "@/components/HomeShowcase";
import { Venue } from "@/components/Venue";
import { RSVP } from "@/components/RSVP";
import { Footer } from "@/components/Footer";
import { Petals } from "@/components/Petals";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gruhapravesam · Sri Mahalakshmi Nilayam — A Sacred Housewarming" },
      { name: "description", content: "Join Ramanathan & Lakshmi for a cinematic Tamil housewarming ceremony — sacred rituals, blessings, and the joy of a new home." },
      { property: "og:title", content: "Gruhapravesam · Sri Mahalakshmi Nilayam" },
      { property: "og:description", content: "A cinematic invitation to our sacred housewarming ceremony." },
    ],
  }),
  component: Index,
});

function Index() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {!entered && <DoorOpening onEnter={() => setEntered(true)} />}

      <main className={entered ? "opacity-100 transition-opacity duration-1000" : "opacity-0"}>
        <div className="relative">
          <Petals count={14} />
          <Hero />
        </div>
        <Journey />
        <Events />
        <SacredHighlight />
        <HomeShowcase />
        <Venue />
        <RSVP />
        <Footer />
      </main>
    </div>
  );
}
