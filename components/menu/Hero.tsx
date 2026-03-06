import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b3b66] via-[#145da0] to-[#1d82c9]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-[-60px] top-10 h-40 w-40 rounded-full bg-white blur-3xl" />
        <div className="absolute right-[-40px] top-20 h-52 w-52 rounded-full bg-cyan-200 blur-3xl" />
        <div className="absolute bottom-[-60px] left-1/3 h-52 w-52 rounded-full bg-blue-300 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div>
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-white/90 backdrop-blur">
            Menú digital
          </span>

          <h1 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
            Mariscos El Arandense
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-white/90 md:text-lg">
            Charolas, ceviches, aguachiles y especialidades con ese sabor que
            abre el apetito desde la primera mirada.
          </p>



          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-full bg-[#f97316] px-6 py-3 text-sm font-extrabold text-white shadow-lg transition hover:scale-[1.03] hover:bg-[#ea580c]"
            >
              Ver menú
            </a>

            <a
              href="https://wa.me/13858664561"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/20"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-[320px] w-[320px] overflow-hidden rounded-[2rem] border-4 border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur md:h-[420px] md:w-[420px]">
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-white">
              <Image
                src="/logo/logo-arandense.png"
                alt="Logo Mariscos El Arandense"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}