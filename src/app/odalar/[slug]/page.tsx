import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { rooms } from "@/data/rooms";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) notFound();

  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1 bg-white pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/#odalar"
            className="text-sm font-medium text-amber-600 hover:underline"
          >
            ← Tüm Odalara Dön
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <img
              src={room.gallery[0]}
              alt={room.name}
              className="h-96 w-full rounded-2xl object-cover"
            />
            <div className="grid grid-cols-2 gap-4">
              {room.gallery.slice(1).map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${room.name} görsel ${i + 2}`}
                  className="h-44 w-full rounded-2xl object-cover"
                />
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                {room.name}
              </h1>
              <p className="mt-4 text-zinc-600">{room.longDesc}</p>

              <h2 className="mt-10 text-lg font-semibold text-zinc-900">
                Oda Özellikleri
              </h2>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-zinc-600">
                {room.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-2xl bg-zinc-50 p-8 ring-1 ring-zinc-200">
              <p className="text-2xl font-bold text-zinc-900">{room.price}</p>
              <dl className="mt-6 space-y-3 text-sm text-zinc-600">
                <div className="flex justify-between">
                  <dt>Oda Büyüklüğü</dt>
                  <dd className="font-medium text-zinc-900">{room.size}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Kapasite</dt>
                  <dd className="font-medium text-zinc-900">
                    {room.capacity}
                  </dd>
                </div>
              </dl>
              <Link
                href={`/rezervasyon?room=${room.slug}`}
                className="mt-8 block w-full rounded-full bg-amber-400 px-6 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
              >
                Rezervasyon Yap
              </Link>
            </aside>
          </div>
        </div>

        <div className="mt-20" />
      </main>
      <Footer />
    </div>
  );
}
