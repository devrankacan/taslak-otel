const stats = [
  { value: "120+", label: "Otel Partneri" },
  { value: "35", label: "Ülkede Hizmet" },
  { value: "1M+", label: "Ağırlanan Misafir" },
  { value: "%98", label: "Memnuniyet Oranı" },
];

export default function Stats() {
  return (
    <section className="bg-zinc-950 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-bold text-amber-400">{stat.value}</p>
            <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
