import Button from "@/components/ui/Button";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { ArrowUpRight } from "lucide-react";

const tools = ["Figma", "Framer", "Adobe XD"];

const thingsDone = [
  "End-to-end product design",
  "User research",
  "Visual design",
  "Attention to detail",
  "Information architecture",
  "User experience design",
  "Product strategy",
  "Interaction design",
];

export default function AboutSection() {
  return (
    <section id="about" className="max-w-site mx-auto px-6 py-20 border-t border-gray-200">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Photo */}
        <div className="max-w-xs w-full">
          <div className="rounded-t-full overflow-hidden">
            <PlaceholderImage aspectRatio="aspect-[3/4]" label="Profile photo" />
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-display-sm mb-6">About me</h2>

          <p className="text-base font-semibold mb-2">Hey! I'm Aashif</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            I come from Erode, a town nestled in the river Kaveri river. I love to explore new
            places and soak in the beauty of the world around me.
          </p>

          {/* Tools */}
          <div className="mb-8">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-3">
              Tools I use
            </p>
            <div className="flex gap-3">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="w-9 h-9 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-600"
                >
                  {tool[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Things done */}
          <div className="mb-10">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-4">
              Things I have done 1000 times
            </p>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {thingsDone.map((item) => (
                <li key={item} className="text-sm text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button href="/resume.pdf" external variant="outline">
              Resume
            </Button>
            <Button
              href="https://linkedin.com/in/aashifali"
              external
              variant="primary"
            >
              LinkedIn profile <ArrowUpRight size={14} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
