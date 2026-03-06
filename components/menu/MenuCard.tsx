import Image from "next/image";

type MenuCardProps = {
  name: string;
  description?: string;
  price: string;
  image: string;
  badge?: string;
};

export default function MenuCard({
  name,
  description,
  price,
  image,
  badge,
}: MenuCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 w-full overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />

        {badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-[#0b3b66] px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white shadow-lg">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-black leading-tight text-[#0b3b66]">
            {name}
          </h3>

          <span className="shrink-0 rounded-full bg-[#facc15] px-3 py-1 text-sm font-extrabold text-[#7c2d12]">
            {price}
          </span>
        </div>

        {description ? (
          <p className="text-sm leading-6 text-slate-600">{description}</p>
        ) : null}

        <a
          href={`https://wa.me/13858664561?text=${encodeURIComponent(
            `Hola, quiero ordenar ${name}`
          )}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-[#f97316] px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-[#ea580c]"
        >
          Pedir ahora
        </a>
      </div>
    </article>
  );
}