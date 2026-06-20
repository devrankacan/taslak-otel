const rooms = [
  {
    name: "Deluxe Oda",
    desc: "Şehir manzaralı, modern donanımlı konfor odası.",
    price: "₺3.200 / gece",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Executive Süit",
    desc: "İş seyahatleri için geniş çalışma alanı ve salon.",
    price: "₺5.800 / gece",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Presidential Süit",
    desc: "Panoramik manzara, özel hizmet ve premium donanım.",
    price: "₺12.500 / gece",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Rooms() {
  return (
    <section id="odalar" className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            Odalar & Süitler
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Her Misafire Özel Konfor
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition hover:shadow-lg"
            >
              <img
                src={room.image}
                alt={room.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {room.name}
                  </h3>
                  <span className="text-sm font-semibold text-amber-600">
                    {room.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-600">{room.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
