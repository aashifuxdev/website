export interface Work {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  year: string;
  ctaLabel?: string;
  ctaHref?: string;
  featured?: boolean;
  wip?: boolean;
  coverImage?: string;
}

export const works: Work[] = [
  {
    slug: "ackodrive",
    title: "AckoDrive: Strategic Design Solutions for SEO Growth and User Engagement",
    subtitle: "Revamping the Car Buying Experience: Designing Make & Model Page and Non-Assisted Journey",
    category: "Racing automobile | UX",
    description:
      "Redesigning the Make & Model page and non-assisted buyer journey to boost organic traffic and improve user decision-making.",
    year: "2023",
    ctaLabel: "Visit AckoDrive",
    ctaHref: "#",
    featured: true,
    coverImage: "/images/works-ackodrive-cover.png",
  },
  {
    slug: "finbox",
    title: "Refining Financial Decision-Making: Sentinel's Impact on Finbox",
    category: "For B2B SaaS",
    description:
      "Sentinel led the refinement of Finbox's MVP, employing strategic UX methodologies to enhance financial decision-making efficiency.",
    year: "2023",
    ctaLabel: "Visit Finbox",
    ctaHref: "#",
    coverImage: "/images/works-finbox-cover.png",
  },
  {
    slug: "quickrecruit",
    title: "Rethinking HR Dynamics: QuickRecruit's Design Revolution",
    category: "For B2B SaaS",
    description:
      "It's a streamlined, no-fuss hiring tool where companies hire in a fraction of time to bring top talent.",
    year: "2022",
    ctaLabel: "View case study",
    ctaHref: "#",
    coverImage: "/images/works-quickrecruit-cover.png",
  },
  {
    slug: "yugaport",
    title: "Yugaport – Website",
    category: "Port logistics platform",
    description:
      "Port logistics platform website that simplifies complex solutions.",
    year: "2022",
    ctaLabel: "View site",
    ctaHref: "#",
    coverImage: "/images/works-yugaport-cover.png",
  },
  {
    slug: "influenza2",
    title: "Influenza2 (Influencer Marketing Platform)",
    category: "For Marketing Platform | App",
    description:
      "A platform connecting brands with influencers for targeted marketing campaigns.",
    year: "2023",
    wip: true,
    coverImage: "/images/works-influenz-cover.png",
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

export function getOtherWorks(slug: string, count = 2): Work[] {
  return works.filter((w) => w.slug !== slug && !w.wip).slice(0, count);
}
