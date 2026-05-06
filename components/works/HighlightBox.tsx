interface HighlightBoxProps {
  heading: string;
  items: string[];
}

export default function HighlightBox({ heading, items }: HighlightBoxProps) {
  return (
    <div className="border-2 border-black p-8 my-10">
      <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-3">
        Key highlights for
      </p>
      <h3 className="text-xl font-bold mb-5">{heading}</h3>
      <ul className="grid sm:grid-cols-2 gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
