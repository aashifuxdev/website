import CaseStudyHeader from "@/components/works/CaseStudyHeader";
import OtherWorks from "@/components/works/OtherWorks";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function FinboxCase() {
  return (
    <article>
      <CaseStudyHeader
        titleAccent="Refining Financial Decision-Making:"
        title="Sentinel's Impact on Finbox"
        ctaLabel="Visit Finbox"
        ctaHref="#"
      />

      <div className="max-w-site mx-auto px-6">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Introduction</h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mb-8">
            In the fast-paced landscape of financial services, streamlined decision-making
            processes are paramount. Sentinel took the helm in refining Finbox's Minimum
            Viable Product (MVP), employing strategic UX methodologies to enhance financial
            decision-making efficiency.
          </p>
          <PlaceholderImage aspectRatio="aspect-[16/7]" label="Finbox dashboard overview" />
        </div>

        {/* Strategic Approach */}
        <div className="mb-12 pt-10 border-t border-gray-200">
          <h2 className="text-xl font-bold mb-6">Strategic Approach to UX Design:</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6">
              <h3 className="text-sm font-bold mb-2">Customized Design Sprint</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Recognizing the need for tailored solutions, Sentinel initiated a customized
                Design Sprint, fostering collaboration and rapid iteration. This intensive
                process ensured that every design decision was aligned with Finbox's
                overarching vision and goals.
              </p>
            </div>
            <div className="bg-gray-50 p-6">
              <h3 className="text-sm font-bold mb-2">Jobs-to-be-Done Framework</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Utilizing the Jobs-to-be-Done framework, Sentinel meticulously dissected user
                objectives and pain points. By understanding the core tasks and motivations of
                financial professionals engaging with the platform, Sentinel crafted a UX
                design that seamlessly catered to their needs.
              </p>
            </div>
            <div className="bg-gray-50 p-6 sm:col-span-2 md:col-span-1">
              <div className="mb-4">
                <PlaceholderImage aspectRatio="aspect-[4/3]" label="Inline dropdown design" />
              </div>
              <h3 className="text-sm font-bold mb-2">Inline Dropdown Designs</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                In response to the need for intuitive data selection, Sentinel introduced
                innovative 'inline dropdown' designs. These sentence-based selection interfaces
                revolutionized user interactions, offering a seamless and efficient way for
                users to navigate and select relevant data points within sentences.
              </p>
            </div>
          </div>
        </div>

        {/* High-Fidelity Prototyping */}
        <div className="mb-12 pt-10 border-t border-gray-200">
          <h2 className="text-xl font-bold mb-6">High-Fidelity Prototyping</h2>

          <div className="mb-6">
            <h3 className="text-sm font-bold mb-2">Collaborative Creation</h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mb-6">
              Guiding the team through the intricacies of UX design, Sentinel led the creation
              of a comprehensive high-fidelity prototype for Finbox's MVP. This collaborative
              effort allowed stakeholders to visualize the platform's interface and
              functionality, facilitating informed feedback and iteration.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-bold mb-2">Early Validation</h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mb-6">
              The high-fidelity prototype served as a pivotal tool for early validation and
              feedback. By providing stakeholders with a tangible preview of the MVP, Sentinel
              ensured that any potential issues or enhancements were addressed proactively,
              streamlining the development process.
            </p>
          </div>

          <PlaceholderImage aspectRatio="aspect-[16/8]" label="High-fidelity prototype screens" />
        </div>

        {/* Impact Created */}
        <div className="mb-12 pt-10 border-t border-gray-200">
          <h2 className="text-xl font-bold mb-6">Impact Created</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Client impact */}
            <div>
              <h3 className="text-sm font-bold mb-3">Client's Impact</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                Following implementation, Finbox's impact on its client, IFL was profound. With
                an <strong>85% reduction in turnaround time</strong>, a{" "}
                <strong>1.5x growth in approval rates</strong>, and a remarkable{" "}
                <strong>95% reduction in error rates</strong>, the platform revolutionised IFL's
                operational efficiency and decision-making processes. Finbox's seamless UX/UI
                design, including the innovative inline dropdown designs, played a pivotal role
                in maximising approvals and minimising errors, ultimately driving business
                growth for IFL.
              </p>

              {/* Bar chart */}
              <div className="flex items-end gap-4 h-28">
                {[
                  { label: "82%", height: "82%" },
                  { label: "85%", height: "85%" },
                  { label: "85%", height: "85%" },
                  { label: "95%", height: "95%", highlight: true },
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 flex-1">
                    <span className="text-xs font-bold text-gray-700">{bar.label}</span>
                    <div
                      className={`w-full ${bar.highlight ? "bg-black" : "bg-gray-300"}`}
                      style={{ height: bar.height }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Stakeholder feedback */}
            <div>
              <h3 className="text-sm font-bold mb-3">Positive Stakeholder Feedback</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                The unveiling of the high-fidelity prototype garnered praise from Finbox
                stakeholders. Its intuitive design and robust functionality exceeded
                expectations, instilling confidence in the project's direction and fostering a
                shared vision among team members.
              </p>
              <PlaceholderImage aspectRatio="aspect-square" label="Stakeholder network" className="max-w-xs" />
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-16 pt-10 border-t border-gray-200">
          <h2 className="text-xl font-bold mb-4">Conclusion</h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
            Sentinel's journey in crafting Finbox's MVP transcended mere design — it was a
            strategic endeavor to redefine financial decision-making. Through the meticulous
            application of design principles, collaborative ideation, and innovative solutions
            like inline dropdown designs, Sentinel delivered impactful results that propelled
            Finbox and its clients toward operational excellence and business success.
          </p>
        </div>
      </div>

      <OtherWorks currentSlug="finbox" />
    </article>
  );
}
