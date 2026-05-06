interface PlaceholderImageProps {
  aspectRatio?: string;
  className?: string;
  label?: string;
}

export default function PlaceholderImage({
  aspectRatio = "aspect-video",
  className = "",
  label,
}: PlaceholderImageProps) {
  return (
    <div
      className={`${aspectRatio} bg-gray-100 flex items-center justify-center w-full ${className}`}
    >
      {label && (
        <span className="text-xs text-gray-400 font-medium">{label}</span>
      )}
    </div>
  );
}
