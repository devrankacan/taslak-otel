"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Room } from "@/data/rooms";

export default function RoomBookingSidebar({ room }: { room: Room }) {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const handleSubmit = () => {
    const params = new URLSearchParams({ room: room.slug });
    if (checkIn) params.set("checkin", checkIn);
    if (checkOut) params.set("checkout", checkOut);
    if (guests) params.set("guests", String(guests));
    router.push(`/rezervasyon?${params.toString()}`);
  };

  return (
    <aside className="rounded-2xl bg-zinc-50 p-8 ring-1 ring-zinc-200">
      <p className="text-2xl font-bold text-zinc-900">{room.price}</p>
      <dl className="mt-6 space-y-3 text-sm text-zinc-600">
        <div className="flex justify-between">
          <dt>Oda Büyüklüğü</dt>
          <dd className="font-medium text-zinc-900">{room.size}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Kapasite</dt>
          <dd className="font-medium text-zinc-900">{room.capacity}</dd>
        </div>
      </dl>

      <div className="mt-6 space-y-3 border-t border-zinc-200 pt-6">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-medium text-zinc-600">Giriş</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-zinc-600">Çıkış</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-amber-500"
            />
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-zinc-600">
            Misafir Sayısı
          </label>
          <input
            type="number"
            min={1}
            max={8}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-amber-500"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="mt-6 block w-full rounded-full bg-amber-400 px-6 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
      >
        Rezervasyon Yap
      </button>
    </aside>
  );
}
