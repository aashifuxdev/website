export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">
      {children}
    </span>
  );
}
