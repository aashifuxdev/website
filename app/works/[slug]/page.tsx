import { notFound } from "next/navigation";
import { works } from "@/data/works";
import AckodriveCase from "@/components/works/cases/AckodriveCase";
import FinboxCase from "@/components/works/cases/FinboxCase";
import DefaultCase from "@/components/works/cases/DefaultCase";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const work = works.find((w) => w.slug === params.slug);
  if (!work) return { title: "Not Found" };
  return { title: `${work.title} — Aashif Ali` };
}

export default function CaseStudyPage({ params }: Props) {
  const work = works.find((w) => w.slug === params.slug);
  if (!work) notFound();

  switch (params.slug) {
    case "ackodrive":
      return <AckodriveCase />;
    case "finbox":
      return <FinboxCase />;
    default:
      return <DefaultCase work={work} />;
  }
}
