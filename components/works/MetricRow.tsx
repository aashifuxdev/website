interface Metric {
  label: string;
  current: string;
  expected: string;
  change: string;
  positive?: boolean;
}

interface MetricRowProps {
  heading: string;
  metrics: Metric[];
}

export default function MetricRow({ heading, metrics }: MetricRowProps) {
  return (
    <div className="mb-12">
      <h3 className="text-base font-semibold mb-5">{heading}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="bg-gray-50 p-5">
            <p className="text-xs text-gray-400 mb-2">{m.label}</p>
            <div className="flex items-baseline gap-3 mb-1">
              <p className="text-sm text-gray-400 line-through">{m.current}</p>
              <p className="text-base font-bold">{m.expected}</p>
            </div>
            <p
              className={`text-xs font-medium ${
                m.positive !== false ? "text-green-600" : "text-red-500"
              }`}
            >
              {m.change}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
