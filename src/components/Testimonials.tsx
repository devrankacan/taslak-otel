const testimonials = [
  {
    quote:
      "Grand Vista ile çalışmaya başladığımızdan sonra misafir memnuniyet skorlarımız %23 arttı. Operasyon süreçlerimiz artık çok daha şeffaf.",
    name: "Elif Karaca",
    title: "Genel Müdür, Marmara Resort Group",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Çok şubeli yapımızda standardizasyon en büyük zorluğumuzdu. Grand Vista'nın sunduğu çözümler bu süreci kökten değiştirdi.",
    name: "Mehmet Aydoğan",
    title: "Operasyon Direktörü, Anadolu Hotels",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Profesyonellik ve hız konusunda beklentilerimizin üzerinde bir hizmet aldık. Kesinlikle tavsiye ediyoruz.",
    name: "Selin Yıldırım",
    title: "Marka Müdürü, Ege Coast Hotels",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
];

const partners = [
  "Marmara Resort Group",
  "Anadolu Hotels",
  "Ege Coast Hotels",
  "İstanbul Plaza Hospitality",
  "Akdeniz Otelcilik",
];

export default function Testimonials() {
  return (
    <section id="referanslar" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Referanslarımız
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bize Güvenen Otel Markaları
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-zinc-900 p-8 ring-1 ring-white/10"
            >
              <p className="text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 border-t border-white/10 pt-12">
          {partners.map((p) => (
            <span
              key={p}
              className="text-sm font-medium uppercase tracking-wide text-zinc-500"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
