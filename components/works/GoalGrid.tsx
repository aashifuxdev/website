interface Goal {
  number: string;
  title: string;
  description: string;
}

interface GoalGridProps {
  heading: string;
  goals: Goal[];
}

export default function GoalGrid({ heading, goals }: GoalGridProps) {
  return (
    <div className="mb-12">
      <h3 className="text-base font-semibold mb-5">{heading}</h3>
      <div
        className={`grid gap-4 ${
          goals.length === 2
            ? "sm:grid-cols-2"
            : goals.length === 3
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : "sm:grid-cols-2"
        }`}
      >
        {goals.map((goal) => (
          <div key={goal.number} className="bg-gray-50 p-5">
            <p className="text-xs text-gray-400 font-medium mb-2">{goal.number}</p>
            <p className="text-sm font-semibold mb-1.5">{goal.title}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{goal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
