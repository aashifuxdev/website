import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { works } from "@/data/works";
import Tag from "@/components/ui/Tag";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function SelectedWorks() {
  return (
    <section id="works" className="max-w-site mx-auto px-6 py-20 border-t border-gray-200">
      <h2 className="text-display-sm mb-12">Selected Works</h2>

      <div className="flex flex-col gap-6">
        {works.map((work, i) => {
          const isWide = i === 0 || i === 4;
          const isSplit = i === 2;

          if (isSplit) {
            return (
              <div key={work.slug} className="grid md:grid-cols-2 gap-6">
                <WorkCard work={work} />
                {works[i + 1] && <WorkCard work={works[i + 1]} compact />}
              </div>
            );
          }

          if (i === 3) return null; // rendered inside split row above

          return <WorkCard key={work.slug} work={work} wide={isWide} />;
        })}
      </div>
    </section>
  );
}

function WorkCard({
  work,
  wide = false,
  compact = false,
}: {
  work: (typeof works)[0];
  wide?: boolean;
  compact?: boolean;
}) {
  const isWip = work.wip;
  const content = (
    <div className={`group ${isWip ? "cursor-default" : "cursor-pointer"}`}>
      {work.coverImage ? (
        <ParallaxImage
          src={work.coverImage}
          alt={work.title}
          aspectRatio={compact ? "aspect-[4/3]" : wide ? "aspect-[16/7]" : "aspect-[16/9]"}
          className="mb-4 group-hover:opacity-90 transition-opacity"
        />
      ) : (
        <PlaceholderImage
          aspectRatio={compact ? "aspect-[4/3]" : wide ? "aspect-[16/7]" : "aspect-[16/9]"}
          label={work.title}
          className="mb-4 group-hover:opacity-90 transition-opacity"
        />
      )}
      <div className="flex items-start justify-between gap-4">
        <div>
          <Tag>{work.category}</Tag>
          <p className="text-sm font-semibold mt-1 leading-snug max-w-lg">
            {work.title}
          </p>
        </div>
        {!isWip && (
          <span className="flex-shrink-0 flex items-center gap-1 text-xs font-medium bg-black text-white px-3 py-2 mt-1 group-hover:bg-gray-800 transition-colors">
            {work.ctaLabel ?? "View case study"} <ArrowUpRight size={12} />
          </span>
        )}
        {isWip && (
          <span className="flex-shrink-0 text-xs text-gray-400 font-medium mt-1">
            Work in progress
          </span>
        )}
      </div>
    </div>
  );

  return isWip ? (
    <div>{content}</div>
  ) : (
    <Link href={`/works/${work.slug}`}>{content}</Link>
  );
}
