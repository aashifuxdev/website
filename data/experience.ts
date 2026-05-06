export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  logoPlaceholder: string;
}

export const experiences: Experience[] = [
  {
    company: "Sketchbrahma Technologies",
    role: "Senior Product designer",
    period: "Mar 2022 – Present",
    description:
      "Experienced in project management and cross-functional collaboration, delivering exceptional user experiences with user-centric solutions on time.",
    logoPlaceholder: "SB",
  },
  {
    company: "Acho",
    role: "Product designer",
    period: "May 2021 – Feb 2022",
    description:
      "Delivering exceptional user experiences and design solutions, contributing to Acho's success under the renowned Anhu brand.",
    logoPlaceholder: "AC",
  },
  {
    company: "Squash Apps",
    role: "UX designer",
    period: "Nov 2020 – Apr 2021",
    description:
      "Worked in diverse projects including internal parcel service product, hospital management system, SME websites, and engaging social media marketing posters.",
    logoPlaceholder: "SA",
  },
  {
    company: "Freelancer",
    role: "UX/UI designer",
    period: "Jan 2020 – Oct 2020",
    description:
      "Managed multiple projects simultaneously, meeting strict deadlines and delivering high-quality design solutions that aligned with clients' brand identities and business objectives.",
    logoPlaceholder: "FR",
  },
];
