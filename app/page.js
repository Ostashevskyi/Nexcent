import Community from "@/components/Community";
import Hero from "@/components/Hero";
import OurClients from "@/components/OurClients";
import Unlock from "@/components/Unlock";

export default function Home() {
  return (
    <div className="max-container">
      <Hero />
      <OurClients />
      <Community />
      <Unlock />
    </div>
  );
}
