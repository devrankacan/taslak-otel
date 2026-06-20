const services = [
  {
    title: "Rezervasyon Yönetim Sistemi",
    desc: "Tüm şubeleriniz için merkezi, gerçek zamanlı rezervasyon altyapısı.",
    icon: "🗓️",
  },
  {
    title: "Misafir İlişkileri & CRM",
    desc: "Sadakat programları ve kişiselleştirilmiş misafir iletişimi.",
    icon: "🤝",
  },
  {
    title: "Etkinlik & Toplantı Çözümleri",
    desc: "Kurumsal etkinlikler ve toplantılar için kusursuz organizasyon desteği.",
    icon: "🏛️",
  },
  {
    title: "Spa & Wellness",
    desc: "Premium sağlık ve wellness hizmetleriyle bütünleşik misafir deneyimi.",
    icon: "💆",
  },
  {
    title: "F&B Operasyon Danışmanlığı",
    desc: "Restoran ve bar operasyonlarında verimlilik ve kalite artışı.",
    icon: "🍽️",
  },
  {
    title: "7/24 Teknik Destek",
    desc: "Otel yönetim sistemleriniz için kesintisiz teknik destek hattı.",
    icon: "🛎️",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Hizmetlerimiz
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Otel Zincirinizi Büyütecek Çözümler
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
