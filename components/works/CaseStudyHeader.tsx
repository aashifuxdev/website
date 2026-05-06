import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface CaseStudyHeaderProps {
  title: string;
  titleAccent?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CaseStudyHeader({
  title,
  titleAccent,
  subtitle,
  ctaLabel,
  ctaHref,
}: CaseStudyHeaderProps) {
  return (
    <div className="max-w-site mx-auto px-6 pt-10 pb-12">
      <Link
        href="/works"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-black transition-colors mb-8"
      >
        <ArrowLeft size={14} /> Back
      </Link>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight max-w-3xl">
          {titleAccent ? (
            <>
              <span className="text-black">{titleAccent} </span>
              <span className="text-gray-400">{title}</span>
            </>
          ) : (
            title
          )}
          {subtitle && (
            <span className="block text-gray-400 font-normal text-lg md:text-xl mt-1">
              {subtitle}
            </span>
          )}
        </h1>

        {ctaLabel && ctaHref && (
          <div className="flex-shrink-0">
            <Button href={ctaHref} external variant="primary">
              {ctaLabel} <ArrowUpRight size={14} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
