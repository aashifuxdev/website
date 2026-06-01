interface MobileFrameProps {
  src: string;
  label: string;
  alt: string;
}

export default function MobileFrame({ src, label, alt }: MobileFrameProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
        {label}
      </p>

      {/* Phone frame */}
      <div
        style={{
          width: 360,
          height: 640,
          border: "10px solid #333",
          borderRadius: 44,
          backgroundColor: "#111",
          overflow: "clip",
          position: "relative",
          flexShrink: 0,
        }}
      >
        {/* Scrollable image viewport */}
        <div
          style={{
            height: "100%",
            overflowY: "scroll",
            overflowX: "hidden",
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
      </div>
    </div>
  );
}
