interface SectionDividerProps {
  number: string;
  title: string;
  overview?: string;
}

export default function SectionDivider({ number, title, overview }: SectionDividerProps) {
  return (
    <div className="mb-10 pt-10 border-t border-gray-200">
      <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">
        {number}
      </p>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      {overview && (
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">{overview}</p>
      )}
    </div>
  );
}
