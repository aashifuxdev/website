import type { Metadata } from "next";
import SelectedWorks from "@/components/home/SelectedWorks";

export const metadata: Metadata = {
  title: "Works — Aashif Ali",
};

export default function WorksPage() {
  return (
    <div className="min-h-screen">
      <SelectedWorks />
    </div>
  );
}
