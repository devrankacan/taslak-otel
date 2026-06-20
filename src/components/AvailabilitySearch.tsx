"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AvailabilitySearch() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (checkIn) params.set("checkin", checkIn);
    if (checkOut) params.set("checkout", checkOut);
    if (guests) params.set("guests", String(guests));
    router.push(`/rezervasyon?${params.toString()}`);
  };

  return (
    <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur sm:flex-row sm:items-end sm:gap-4">
      <div className="flex-1 text-left">
        <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Giriş Tarihi
        </label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-amber-500"
        />
      </div>
      <div className="flex-1 text-left">
        <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Çıkış Tarihi
        </label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-amber-500"
        />
      </div>
      <div className="text-left sm:w-32">
        <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Misafir
        </label>
        <input
          type="number"
          min={1}
          max={8}
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-900 outline-none focus:border-amber-500"
        />
      </div>
      <button
        type="button"
        onClick={handleSearch}
        className="rounded-lg bg-amber-400 px-6 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
      >
        Müsaitlik Ara
      </button>
    </div>
  );
}
