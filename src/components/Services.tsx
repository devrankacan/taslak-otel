const services = [
  {
    title: "Spa & Wellness Merkezi",
    desc: "Sauna, buhar odası ve masaj salonlarıyla yenilenmiş hissedin.",
    icon: "💆",
  },
  {
    title: "Restoran & Bar",
    desc: "Açık büfe kahvaltı, à la carte restoran ve gece yarısına kadar açık bar.",
    icon: "🍽️",
  },
  {
    title: "Açık & Kapalı Havuz",
    desc: "Isıtmalı kapalı havuz ve manzaralı açık havuzumuzda serinleyin.",
    icon: "🏊",
  },
  {
    title: "Fitness Merkezi",
    desc: "Son teknoloji ekipmanlarla 7/24 açık fitness salonu.",
    icon: "🏋️",
  },
  {
    title: "Toplantı & Etkinlik Salonları",
    desc: "Düğün, toplantı ve özel davetleriniz için donanımlı salonlar.",
    icon: "🏛️",
  },
  {
    title: "Ücretsiz Otopark & Transfer",
    desc: "Misafirlerimize özel vale park ve havalimanı transfer hizmeti.",
    icon: "🚗",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Otel İmkanları
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Konaklamanız Boyunca Yanınızdayız
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-zinc-200 p-8 transition hover:border-amber-300 hover:shadow-md"
            >
              <div className="text-3xl">{service.icon}</div>
              <h3 className="mt-4 font-semibold text-zinc-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
