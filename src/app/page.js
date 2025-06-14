import Image from "next/image";

import HeroSection from "@/components/sections/HeroSection";
import MoreInfoSection from "@/components/sections/MoreInfoSection";
import { CitizensSection } from "@/components/sections/CitizensSection";
import { OrganizersSection } from "@/components/sections/OrganizersSection";
import { TechnologySection } from "@/components/sections/TechnologySection";

export default function Home() {
  return (
    <main className="min-h-screen">
    
      <HeroSection></HeroSection>

      <MoreInfoSection></MoreInfoSection>

      <CitizensSection></CitizensSection>

      <OrganizersSection></OrganizersSection>

      <TechnologySection></TechnologySection>
    </main>
  );
}
