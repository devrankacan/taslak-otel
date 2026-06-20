export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 text-zinc-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        <span className="text-lg font-semibold text-white">
          Grand <span className="text-amber-400">Vista</span>
        </span>
        <p className="text-sm">
          © {new Date().getFullYear()} Grand Vista Hotels & Resorts. Tüm
          hakları saklıdır.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-amber-400">
            Gizlilik Politikası
          </a>
          <a href="#" className="hover:text-amber-400">
            Kullanım Şartları
          </a>
        </div>
      </div>
    </footer>
  );
}
