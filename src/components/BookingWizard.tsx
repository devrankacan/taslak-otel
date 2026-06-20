"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { rooms } from "@/data/rooms";

const steps = ["Tarih", "Oda Seçimi", "Misafir Bilgileri", "Ödeme", "Onay"];

function nightsBetween(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 0;
  const inDate = new Date(checkIn);
  const outDate = new Date(checkOut);
  const diff = Math.round(
    (outDate.getTime() - inDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  return diff > 0 ? diff : 0;
}

function parsePrice(price: string) {
  const numeric = price.replace(/[^\d]/g, "");
  return Number(numeric) || 0;
}

export default function BookingWizard() {
  const searchParams = useSearchParams();
  const preselectedSlug = searchParams.get("room");

  const [step, setStep] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [roomSlug, setRoomSlug] = useState(preselectedSlug || "");
  const [guestInfo, setGuestInfo] = useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  });
  const [card, setCard] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  });
  const [confirmationCode, setConfirmationCode] = useState("");

  const selectedRoom = useMemo(
    () => rooms.find((r) => r.slug === roomSlug),
    [roomSlug]
  );

  const nights = nightsBetween(checkIn, checkOut);
  const total = selectedRoom ? parsePrice(selectedRoom.price) * (nights || 1) : 0;

  const canGoNext = () => {
    if (step === 0) return Boolean(checkIn && checkOut && nights > 0 && guests > 0);
    if (step === 1) return Boolean(selectedRoom);
    if (step === 2) return Boolean(guestInfo.name && guestInfo.email && guestInfo.phone);
    if (step === 3) return Boolean(card.name && card.number && card.expiry && card.cvc);
    return true;
  };

  const handlePay = () => {
    const code = `GV-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(code);
    setStep(4);
  };

  return (
    <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-200 sm:p-10">
      <ol className="mb-10 flex flex-wrap items-center justify-between gap-y-3 text-xs font-medium text-zinc-500 sm:text-sm">
        {steps.map((label, i) => (
          <li key={label} className="flex items-center gap-2">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
                i <= step ? "bg-amber-400 text-zinc-950" : "bg-zinc-200 text-zinc-500"
              }`}
            >
              {i + 1}
            </span>
            <span className={i === step ? "text-zinc-900" : ""}>{label}</span>
            {i < steps.length - 1 && (
              <span className="mx-2 hidden h-px w-6 bg-zinc-300 sm:inline-block" />
            )}
          </li>
        ))}
      </ol>

      {step === 0 && (
        <div className="space-y-5">
          <h2 className="text-lg font-semibold text-zinc-900">Tarih & Misafir Bilgisi</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-zinc-700">Giriş Tarihi</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="mt-1 w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-zinc-700">Çıkış Tarihi</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="mt-1 w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-amber-500"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-zinc-700">Misafir Sayısı</label>
            <input
              type="number"
              min={1}
              max={8}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-amber-500 sm:w-40"
            />
          </div>
          {checkIn && checkOut && nights === 0 && (
            <p className="text-sm text-red-600">Çıkış tarihi giriş tarihinden sonra olmalıdır.</p>
          )}
        </div>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <h2 className="text-lg font-semibold text-zinc-900">Oda Seçimi</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {rooms.map((room) => (
              <button
                key={room.slug}
                type="button"
                onClick={() => setRoomSlug(room.slug)}
                className={`overflow-hidden rounded-2xl border text-left transition ${
                  roomSlug === room.slug
                    ? "border-amber-500 ring-2 ring-amber-400"
                    : "border-zinc-200 hover:border-amber-300"
                }`}
              >
                <img src={room.image} alt={room.name} className="h-32 w-full object-cover" />
                <div className="p-4">
                  <p className="font-semibold text-zinc-900">{room.name}</p>
                  <p className="mt-1 text-sm text-amber-600">{room.price}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <h2 className="text-lg font-semibold text-zinc-900">Misafir Bilgileri</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Ad Soyad"
              value={guestInfo.name}
              onChange={(e) => setGuestInfo({ ...guestInfo, name: e.target.value })}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-amber-500"
            />
            <input
              type="email"
              placeholder="E-posta"
              value={guestInfo.email}
              onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-amber-500"
            />
            <input
              type="tel"
              placeholder="Telefon"
              value={guestInfo.phone}
              onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-amber-500 sm:col-span-2"
            />
          </div>
          <textarea
            placeholder="Özel istekleriniz (opsiyonel)"
            rows={3}
            value={guestInfo.note}
            onChange={(e) => setGuestInfo({ ...guestInfo, note: e.target.value })}
            className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-amber-500"
          />
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <h2 className="text-lg font-semibold text-zinc-900">Ödeme Bilgileri</h2>
          <p className="text-xs text-zinc-500">
            Bu alan demo amaçlıdır, herhangi bir gerçek ödeme işlemi gerçekleştirilmez.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Kart Üzerindeki Ad"
              value={card.name}
              onChange={(e) => setCard({ ...card, name: e.target.value })}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-amber-500 sm:col-span-2"
            />
            <input
              type="text"
              placeholder="Kart Numarası"
              value={card.number}
              onChange={(e) => setCard({ ...card, number: e.target.value })}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-amber-500 sm:col-span-2"
            />
            <input
              type="text"
              placeholder="AA/YY"
              value={card.expiry}
              onChange={(e) => setCard({ ...card, expiry: e.target.value })}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-amber-500"
            />
            <input
              type="text"
              placeholder="CVC"
              value={card.cvc}
              onChange={(e) => setCard({ ...card, cvc: e.target.value })}
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-amber-500"
            />
          </div>

          {selectedRoom && (
            <div className="rounded-2xl bg-zinc-50 p-5 text-sm text-zinc-700">
              <div className="flex justify-between">
                <span>{selectedRoom.name} × {nights || 1} gece</span>
                <span className="font-semibold">₺{total.toLocaleString("tr-TR")}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl">
            ✓
          </div>
          <h2 className="text-2xl font-bold text-zinc-900">Rezervasyonunuz Alındı</h2>
          <p className="text-zinc-600">
            {guestInfo.name}, {selectedRoom?.name} için rezervasyonunuz onaylandı.
          </p>
          <div className="mx-auto inline-block rounded-xl bg-zinc-50 px-6 py-3 text-sm text-zinc-700 ring-1 ring-zinc-200">
            Rezervasyon Kodu: <span className="font-semibold text-amber-600">{confirmationCode}</span>
          </div>
          <div className="mx-auto max-w-sm space-y-1 pt-4 text-sm text-zinc-600">
            <p>Giriş: {checkIn} · Çıkış: {checkOut}</p>
            <p>Misafir Sayısı: {guests}</p>
            <p>Toplam: ₺{total.toLocaleString("tr-TR")}</p>
          </div>
        </div>
      )}

      {step < 4 && (
        <div className="mt-10 flex items-center justify-between">
          <button
            type="button"
            disabled={step === 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className="rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-semibold text-zinc-700 disabled:opacity-40"
          >
            Geri
          </button>
          {step < 3 ? (
            <button
              type="button"
              disabled={!canGoNext()}
              onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
              className="rounded-full bg-amber-400 px-8 py-2.5 text-sm font-semibold text-zinc-950 disabled:opacity-40"
            >
              İleri
            </button>
          ) : (
            <button
              type="button"
              disabled={!canGoNext()}
              onClick={handlePay}
              className="rounded-full bg-amber-400 px-8 py-2.5 text-sm font-semibold text-zinc-950 disabled:opacity-40"
            >
              Rezervasyonu Tamamla
            </button>
          )}
        </div>
      )}
    </div>
  );
}
