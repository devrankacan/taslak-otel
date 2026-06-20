import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/20" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
          Kurumsal Misafirperverlik Çözümleri
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
          Otel Zincirleri İçin <br /> Lüks ve Güvenilir Deneyim
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
          Grand Vista, kurumsal otel markalarına özel olarak tasarlanmış
          misafir deneyimi, operasyon yönetimi ve marka konumlandırma
          çözümleri sunar.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/rezervasyon"
            className="rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
          >
            Rezervasyon Yap
          </Link>
          <a
            href="#odalar"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Odaları Keşfedin
          </a>
        </div>
      </div>
    </section>
  );
}
