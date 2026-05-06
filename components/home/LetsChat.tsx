import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "LinkedIn profile", href: "https://linkedin.com/in/aashifali" },
  { label: "Email", href: "mailto:hello@aashifali.com" },
  { label: "Instagram", href: "https://instagram.com/aashifali" },
];

export default function LetsChat() {
  return (
    <section className="max-w-site mx-auto px-6 py-24 border-t border-gray-200">
      <h2 className="text-display-sm mb-2">Let's chat</h2>
      <p className="text-gray-400 text-lg mb-12">about Design, Product, Mentorship</p>

      <div className="flex flex-wrap gap-4">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-200 px-5 py-3 text-sm font-medium hover:border-black transition-colors"
          >
            {label} <ArrowUpRight size={14} />
          </a>
        ))}
      </div>
    </section>
  );
}
