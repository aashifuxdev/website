import CaseStudyHeader from "@/components/works/CaseStudyHeader";
import OtherWorks from "@/components/works/OtherWorks";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import type { Work } from "@/data/works";

export default function DefaultCase({ work }: { work: Work }) {
  return (
    <article>
      <CaseStudyHeader
        title={work.title}
        ctaLabel={work.ctaLabel}
        ctaHref={work.ctaHref}
      />

      <div className="max-w-site mx-auto px-6 pb-16">
        <PlaceholderImage aspectRatio="aspect-[16/8]" label={work.title} className="mb-10" />
        <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">{work.description}</p>
      </div>

      <OtherWorks currentSlug={work.slug} />
    </article>
  );
}
