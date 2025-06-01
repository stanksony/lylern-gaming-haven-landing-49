
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { GameHosting } from "@/components/sections/GameHosting";
import { BotHosting } from "@/components/sections/BotHosting";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navigation />
      <Hero />
      <GameHosting />
      <BotHosting />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
