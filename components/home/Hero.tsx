export default function Hero() {
  return (
    <section className="relative max-w-site mx-auto px-6 pt-16 pb-20 overflow-hidden">
      {/* Vertical name — right side */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 writing-vertical text-[11px] font-bold tracking-[0.3em] text-gray-300 select-none hidden lg:block">
        AASHIF ALI
      </div>

      {/* Left accent bar */}
      <div className="absolute left-0 top-16 bottom-20 w-1 bg-black hidden md:block" />

      <div className="md:pl-8">
        <p className="text-sm text-gray-500 font-medium mb-6 tracking-wide uppercase">
          4 years of exp
        </p>

        <h1 className="text-display leading-none">
          <span className="block">
            <span className="bg-black text-white px-3 py-1 inline-block">
              Senior Product
            </span>
          </span>
          <span className="block mt-2">Designer</span>
        </h1>
      </div>
    </section>
  );
}
