import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import WorkExperience from "@/components/home/WorkExperience";
import SelectedWorks from "@/components/home/SelectedWorks";
import LetsChat from "@/components/home/LetsChat";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorkExperience />
      <SelectedWorks />
      <LetsChat />
    </>
  );
}
