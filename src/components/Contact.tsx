export default function Contact() {
  return (
    <section id="iletisim" className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 lg:grid-cols-2 lg:p-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              İletişime Geçin
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Bizimle İletişime Geçin
            </h2>
            <p className="mt-6 text-zinc-600">
              Kurumsal otel zincirinize özel çözümlerimiz hakkında bilgi
              almak için formu doldurun, ekibimiz 24 saat içinde sizinle
              iletişime geçsin.
            </p>

            <div className="mt-10 space-y-4 text-sm text-zinc-600">
              <p>📍 Levent Mah. Büyükdere Cd. No:120, İstanbul</p>
              <p>📞 +90 (212) 555 01 23</p>
              <p>✉️ kurumsal@grandvista.com</p>
            </div>
          </div>

          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Ad Soyad"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-amber-500"
              />
              <input
                type="text"
                placeholder="Şirket / Otel Adı"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-amber-500"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="email"
                placeholder="E-posta"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-amber-500"
              />
              <input
                type="tel"
                placeholder="Telefon"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-amber-500"
              />
            </div>
            <textarea
              placeholder="Mesajınız"
              rows={4}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
            >
              Mesajı Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
