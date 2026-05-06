import type { Metadata } from "next";
import AboutSection from "@/components/home/AboutSection";

export const metadata: Metadata = {
  title: "About — Aashif Ali",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutSection />
    </div>
  );
}
