import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const CONDITION_COLORS = {
  Sunny: "#fbbf24",
  "Partly Cloudy": "#38bdf8",
  Cloudy: "#94a3b8",
  Foggy: "#64748b",
  Rainy: "#818cf8",
  Stormy: "#a78bfa",
};

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm shadow-xl">
      <p className="text-slate-100 font-semibold">{payload[0].name}</p>
      <p className="text-slate-400">{payload[0].value} days</p>
    </div>
  );
};

const ConditionBreakdown = ({ conditionCounts }) => {
  const data = Object.entries(conditionCounts).map(([name, value]) => ({ name, value }));

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-100">Conditions Breakdown</h3>
        <p className="text-xs text-slate-500 mt-0.5">Days by weather type</p>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={85}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry) => (
              <Cell
                key={entry.name}
                fill={CONDITION_COLORS[entry.name] ?? "#475569"}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: "11px", color: "#94a3b8" }}
            iconType="circle"
            iconSize={8}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ConditionBreakdown;
