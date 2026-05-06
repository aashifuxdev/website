import { experiences } from "@/data/experience";

export default function WorkExperience() {
  return (
    <section id="experience" className="max-w-site mx-auto px-6 py-20 border-t border-gray-200">
      <h2 className="text-display-sm mb-12">Work experience</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex flex-col gap-3">
            {/* Logo placeholder */}
            <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-500">
              {exp.logoPlaceholder}
            </div>

            <div>
              <p className="text-xs text-gray-400 font-medium mb-1">{exp.period}</p>
              <p className="text-sm font-semibold text-black">{exp.company}</p>
              <p className="text-sm text-gray-500 font-medium mb-2">{exp.role}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
