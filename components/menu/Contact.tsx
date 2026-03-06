export default function Contact() {
  return (
    <section
      id="contacto"
      className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0b3b66] via-[#145da0] to-[#1d82c9] text-white shadow-xl"
    >
      <div className="grid gap-8 px-6 py-10 md:grid-cols-2 md:px-10 md:py-14">
        <div>
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-bold text-white/90">
            Contacto
          </span>

          <h3 className="mt-4 text-3xl font-black md:text-4xl">
            Haz tu pedido y disfruta el sabor del mar
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 md:text-base">
            Estamos listos para atenderte con tus platillos favoritos. Ordena
            por WhatsApp o visítanos.
          </p>

          <a
            href="https://wa.me/13858664561"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-[#f97316] px-6 py-3 text-sm font-extrabold text-white shadow-lg transition hover:scale-[1.03] hover:bg-[#ea580c]"
          >
            Pedir por WhatsApp
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-wide text-white/70">
              Teléfono
            </p>
            <p className="mt-2 text-lg font-black">(385) 866 4561</p>
          </div>

          <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-wide text-white/70">
              Horario
            </p>
            <p className="mt-2 text-lg font-black">
              Lunes a Domingo
              <br />
              11:00 AM - 6:00 PM
            </p>
          </div>




        </div>
      </div>
    </section>
  );
}