"use client";

interface MobileFrameProps {
  src: string;
  label: string;
  alt: string;
}

export default function MobileFrame({ src, label, alt }: MobileFrameProps) {
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
        {label}
      </p>

      <div style={{ position: "relative", width: 360, height: 640, flexShrink: 0 }}>

        {/* Scrollable viewport */}
        <div
          data-lenis-prevent
          onWheel={handleWheel}
          style={{
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            overflowX: "hidden",
            borderRadius: 34,
            backgroundColor: "#111",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-y",
          } as React.CSSProperties}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        {/* Border overlay — never blocks scroll */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "10px solid #333",
            borderRadius: 44,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}
