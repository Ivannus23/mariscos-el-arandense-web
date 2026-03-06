import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b3b66]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/20 bg-white">
            <Image
              src="/logo/logo-arandense.png"
              alt="Logo Mariscos El Arandense"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-lg font-extrabold leading-none text-white md:text-xl">
              Mariscos El Arandense
            </p>
            <p className="text-xs text-white/75 md:text-sm">
              Sabor del mar con toque mexicano
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#menu"
            className="text-sm font-medium text-white/85 transition hover:text-white"
          >
            Menú
          </a>
          <a
            href="#charolas"
            className="text-sm font-medium text-white/85 transition hover:text-white"
          >
            Charolas
          </a>
          <a
            href="#individuales"
            className="text-sm font-medium text-white/85 transition hover:text-white"
          >
            Individuales
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium text-white/85 transition hover:text-white"
          >
            Contacto
          </a>
        </nav>

        <a
          href="https://wa.me/13858664561"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#f97316] px-4 py-2 text-sm font-bold text-white shadow-lg transition hover:scale-[1.03] hover:bg-[#ea580c]"
        >
          Ordenar
        </a>
      </div>
    </header>
  );
}