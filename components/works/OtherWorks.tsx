import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getOtherWorks } from "@/data/works";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Tag from "@/components/ui/Tag";

export default function OtherWorks({ currentSlug }: { currentSlug: string }) {
  const others = getOtherWorks(currentSlug, 2);

  if (!others.length) return null;

  return (
    <section className="max-w-site mx-auto px-6 py-16 border-t border-gray-200 mt-16">
      <h2 className="text-xl font-bold mb-8">Other works</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {others.map((work) => (
          <Link key={work.slug} href={`/works/${work.slug}`} className="group">
            {work.coverImage ? (
              <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden group-hover:opacity-90 transition-opacity">
                <Image src={work.coverImage} alt={work.title} fill className="object-cover" />
              </div>
            ) : (
              <PlaceholderImage
                aspectRatio="aspect-[4/3]"
                label={work.title}
                className="mb-4 group-hover:opacity-90 transition-opacity"
              />
            )}
            <Tag>{work.category}</Tag>
            <p className="text-sm font-semibold mt-1 mb-2 leading-snug">{work.title}</p>
            {work.ctaLabel && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-black underline underline-offset-4">
                {work.ctaLabel} <ArrowUpRight size={11} />
              </span>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
