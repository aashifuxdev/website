import type { Metadata } from "next";
import WorkExperience from "@/components/home/WorkExperience";

export const metadata: Metadata = {
  title: "Experience — Aashif Ali",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <WorkExperience />
    </div>
  );
}
