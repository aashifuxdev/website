import CaseStudyHeader from "@/components/works/CaseStudyHeader";
import SectionDivider from "@/components/works/SectionDivider";
import GoalGrid from "@/components/works/GoalGrid";
import MetricRow from "@/components/works/MetricRow";
import HighlightBox from "@/components/works/HighlightBox";
import OtherWorks from "@/components/works/OtherWorks";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function AckodriveCase() {
  return (
    <article>
      <CaseStudyHeader
        titleAccent="Revamping the Car Buying Experience:"
        title="Designing Make & Model Page and Non-Assisted Journey"
        ctaLabel="Visit AckoDrive"
        ctaHref="#"
      />

      {/* Section 1 */}
      <div className="max-w-site mx-auto px-6">
        <SectionDivider
          number="1."
          title="Make and Model (MM) Page"
          overview="Our analysis revealed that AckoDrive's MM page was lacking organic search traffic compared to the Grands and CarDekho. This was offering business viability by increasing Conversion Rate (CVR). The goal is to redesign the MM page to attract inbound organic traffic, improve SEO, and support the automatic generation of pages for new car models."
        />

        <GoalGrid
          heading="User Goals"
          goals={[
            {
              number: "01",
              title: "Comprehensive information",
              description:
                "Users can access detailed information about car features and safety.",
            },
            {
              number: "02",
              title: "Easy Navigation",
              description:
                "Users should be able to navigate through various options to express interest or make choices effectively.",
            },
            {
              number: "03",
              title: "Share Informed",
              description:
                "Users can easily be able to request detailed information and understand their unique attributes.",
            },
          ]}
        />

        <GoalGrid
          heading="Business Goals"
          goals={[
            {
              number: "01",
              title: "Increase Engagement",
              description:
                "Increase user engagement and interest in purchasing the car model.",
            },
            {
              number: "02",
              title: "Increase Organic Traffic",
              description:
                "Enhance visibility and attract more organic traffic to the MM page.",
            },
          ]}
        />

        <MetricRow
          heading="Current vs. Expected Traffic: Measuring the Impact of Our MM Page Redesign"
          metrics={[
            {
              label: "Total session and Organic Traffic",
              current: "329,000 count",
              expected: "165,000 meet",
              change: "+50.1% expected",
              positive: true,
            },
            {
              label: "Expected Organic Sessions",
              current: "100,000",
              expected: "165,000",
              change: "+65% expected",
              positive: true,
            },
            {
              label: "Avg. Session Duration",
              current: "6:13 Count",
              expected: "168,000 Count",
              change: "+172.5% expected",
              positive: true,
            },
            {
              label: "Bounce Rate",
              current: "100,000 Count",
              expected: "100,000 Count",
              change: "+172.5% expected",
              positive: false,
            },
          ]}
        />

        <HighlightBox
          heading="Features & Content"
          items={[
            "Detailed Features and Safety Information",
            "Choosing the Right Variant",
            "Expert Reviews and Insights",
            "Maintenance and Warranty",
            "Comparisons and Variant analysis",
            "Availability and Recommendations",
          ]}
        />

        {/* Design Challenge */}
        <div className="mb-12">
          <h3 className="text-base font-semibold mb-5">Design Challenge</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                label: "Feature Richness",
                desc: "Featuring and displaying the diverse features of different car models in a consistent layout.",
              },
              {
                label: "Scalability",
                desc: "Ensuring a cohesive and user-friendly design despite varying model attributes.",
              },
              {
                label: "Adaptability",
                desc: "Ensuring the design to accommodate unique features of each car model while maintaining clarity and alignment.",
              },
            ].map((c) => (
              <div key={c.label} className="bg-gray-50 p-5">
                <p className="text-sm font-semibold mb-2">{c.label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Before / After */}
        <div className="mb-16">
          <h3 className="text-base font-semibold mb-5">Current MM page vs Redesigned MM Page</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Current</p>
              <PlaceholderImage aspectRatio="aspect-[9/16]" label="Current MM page" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Redesigned</p>
              <PlaceholderImage aspectRatio="aspect-[9/16]" label="Redesigned MM page" />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <SectionDivider
          number="2."
          title="Non-Assisted Buyer Journey / Customer Delight"
          overview="Currently AckoDrive's car booking is managed through an assisted journey which significant customer costs have been experienced. This approach increases operational costs and leads to user frustration - from price comparisons, transparency, and understanding the user's car buying journey, leading to inefficiencies and customer attrition."
        />

        <GoalGrid
          heading="User Goals"
          goals={[
            {
              number: "01",
              title: "Seamless User Solutions",
              description:
                "Enable users to independently complete their car purchase journey, minimising the need for customer care intervention.",
            },
            {
              number: "02",
              title: "Clear Transparency",
              description:
                "Provide financing options, and detailed information on add-ons and services.",
            },
            {
              number: "03",
              title: "Simplify Documentation",
              description:
                "Simplify the process for users to upload necessary documents and receive invoices.",
            },
            {
              number: "04",
              title: "Promote Additional Services",
              description:
                "Encourage users to select value-added services and financing options.",
            },
            {
              number: "05",
              title: "Better User Experience",
              description:
                "Provide timely updates & seamless process from booking to delivery.",
            },
          ]}
        />

        <GoalGrid
          heading="Business Goals"
          goals={[
            {
              number: "01",
              title: "Increase number of self-service bookings",
              description:
                "Increase the number of self-service bookings individually.",
            },
            {
              number: "02",
              title: "Financing Options",
              description:
                "Promote financing options and upsell additional services.",
            },
          ]}
        />

        {/* Design Solution */}
        <div className="mb-12">
          <h3 className="text-base font-semibold mb-5">Design Solution</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <PlaceholderImage aspectRatio="aspect-[9/16]" label="Solution screen 1" />
            <PlaceholderImage aspectRatio="aspect-[9/16]" label="Solution screen 2" />
            <PlaceholderImage aspectRatio="aspect-[9/16]" label="Solution screen 3" />
          </div>
        </div>
      </div>

      <OtherWorks currentSlug="ackodrive" />
    </article>
  );
}
