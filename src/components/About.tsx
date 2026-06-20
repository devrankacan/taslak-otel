const features = [
  {
    title: "Merkezi Konum",
    desc: "Şehrin kalbinde, başlıca turistik ve iş noktalarına yürüme mesafesinde.",
  },
  {
    title: "Özenli Hizmet",
    desc: "Check-in'den check-out'a, deneyimli ekibimizle sıcak ve kişisel bir ağırlama.",
  },
  {
    title: "Konfor Odaklı Tasarım",
    desc: "Her odamız, dinlenmenizi önceleyen modern bir konfor anlayışıyla tasarlandı.",
  },
];

export default function About() {
  return (
    <section id="hakkimizda" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Hakkımızda
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Şehrin Kalbinde Konforlu Bir Konaklama
            </h2>
            <p className="mt-6 text-zinc-600">
              Grand Vista Hotel, hem iş hem tatil amaçlı seyahatlerinizde
              size huzurlu bir konaklama sunmak için tasarlandı. Şık
              odalarımız, zengin kahvaltımız ve misafirperver ekibimizle
              sizi ağırlamayı sabırsızlıkla bekliyoruz.
            </p>

            <div className="mt-10 space-y-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />
                  <div>
                    <h3 className="font-semibold text-zinc-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"
              alt="Otel lobisi"
              className="h-64 w-full rounded-2xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80"
              alt="Otel resepsiyonu"
              className="mt-8 h-64 w-full rounded-2xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80"
              alt="Otel havuzu"
              className="h-64 w-full rounded-2xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
              alt="Otel odası"
              className="mt-8 h-64 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
