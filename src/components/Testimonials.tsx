const testimonials = [
  {
    quote:
      "Odamız çok temiz ve konforluydu, personel son derece ilgiliydi. Kahvaltı seçenekleri de oldukça zengindi. Tekrar geleceğiz.",
    name: "Elif Karaca",
    title: "İstanbul",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "İş seyahatimde kaldığım en rahat otellerden biriydi. Konumu merkezi, oda çok sessizdi, gayet dinlendirici bir konaklama oldu.",
    name: "Mehmet Aydoğan",
    title: "Ankara",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Spa hizmeti ve havuz beklentimizin çok üzerindeydi. Ailecek harika bir tatil geçirdik, kesinlikle tavsiye ederim.",
    name: "Selin Yıldırım",
    title: "İzmir",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="referanslar" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Misafir Yorumları
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Misafirlerimiz Ne Diyor?
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
      </div>
    </section>
  );
}
