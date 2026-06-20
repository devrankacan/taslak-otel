import Link from "next/link";
import { rooms } from "@/data/rooms";

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
            <Link
              key={room.slug}
              href={`/odalar/${room.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition hover:shadow-lg"
            >
              <img
                src={room.image}
                alt={room.name}
                className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
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
                <span className="mt-4 inline-block text-sm font-semibold text-amber-600 group-hover:underline">
                  Detayları Gör →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
