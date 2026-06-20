import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingWizard from "@/components/BookingWizard";

export default function ReservationPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1 bg-zinc-50 pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Rezervasyon
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Konaklamanızı Planlayın
            </h1>
          </div>

          <Suspense>
            <BookingWizard />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}
