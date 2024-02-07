import Achievements from "@/components/Achievements";
import Calendar from "@/components/Calendar";
import Community from "@/components/Community";
import Customers from "@/components/Customers";
import Demo from "@/components/Demo";
import Hero from "@/components/Hero";
import OurClients from "@/components/OurClients";
import Unlock from "@/components/Unlock";
import Updates from "@/components/Updates";

export default function Home() {
  return (
    <div className="max-container">
      <Hero />
      <OurClients />
      <Community />
      <Unlock />
      <Achievements />
      <Calendar />
      <Customers />
      <Updates />
      <Demo />
    </div>
  );
}
