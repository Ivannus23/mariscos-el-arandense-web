import Header from "@/components/menu/Header";
import Hero from "@/components/menu/Hero";
import MenuSection from "@/components/menu/MenuSection";
import Contact from "@/components/menu/Contact";

const charolas = [
  {
    name: "Camarones Cucaracha",
    description: "Completos con arroz blanco y ensalada.",
    price: "$100 USD",
    image: "/menu/camarones-cucaracha.jpeg",
    badge: "Especialidad",
  },
  {
    name: "Pulpo con Camarón en Salsa Negra",
    description: "Especialidad de la casa con sabor intenso y marino.",
    price: "$100 USD",
    image: "/menu/pulpo-camaron-salsa-negra.jpeg",
    badge: "Charola",
  },
  {
    name: "Ceviche de Camarón",
    description: "Fresco, antojable y perfecto para compartir.",
    price: "$80 USD",
    image: "/menu/charola-ceviche-camaron.jpeg",
    badge: "Charola",
  },
  {
    name: "Ceviche de Pescado",
    description: "Preparado al momento con sabor fresco y tradicional.",
    price: "$70 USD",
    image: "/menu/charola-ceviche-pescado.jpeg",
    badge: "Charola",
  },
  {
    name: "Aguachile",
    description: "Toque picosito y frescura que prende el paladar.",
    price: "$80 USD",
    image: "/menu/charola-aguachile.jpeg",
    badge: "Charola",
  },
  {
    name: "Pulpo Zarandeado",
    description: "Charola especial con gran sabor y excelente porción.",
    price: "$120 USD",
    image: "/menu/pulpo-zarandeado-charola.jpeg",
    badge: "Especial",
  },
  {
    name: "Cóctel de Camarón con Pulpo",
    description: "Mezcla fresca de camarón y pulpo, ideal para disfrutar al momento.",
    price: "$25 USD",
    image: "/menu/coctel-camaron-pulpo.jpeg",
    badge: "Cóctel",
  },
  {
    name: "Charola Botanera",
    description: "Camarón cocido, pescado, pulpo y aguachile.",
    price: "$100 USD",
    image: "/menu/charola-botanera.jpeg",
    badge: "Especial",
  },
  {
    name: "Camarones Zarandeados",
    description: "Con complementos, arroz blanco y ensalada.",
    price: "$100 USD",
    image: "/menu/camarones-zarandeados.jpeg",
    badge: "Charola",
  },
];

const individuales = [
  {
    name: "Camarones Cucaracha Individual",
    description: "Porción individual.",
    price: "$35 USD",
    image: "/menu/camarones-cucaracha.jpeg",
    badge: "Individual",
  },
  {
    name: "Aguachile Individual",
    description: "Frescura y picor en porción personal.",
    price: "$25 USD",
    image: "/menu/charola-aguachile.jpeg",
    badge: "Individual",
  },
  {
    name: "Ceviche de Pescado Individual",
    description: "Ligero, fresco y delicioso.",
    price: "$20 USD",
    image: "/menu/ceviche-pescado-individual.jpeg",
    badge: "Individual",
  },
  {
    name: "Ceviche de Camarón Individual",
    description: "Sabor del mar en una porción perfecta.",
    price: "$25 USD",
    image: "/menu/ceviche-camaron-individual.jpeg",
    badge: "Individual",
  },
  {
    name: "Camarones Zarandeados Individual",
    description: "Porción individual con el gran sabor de la casa.",
    price: "$35 USD",
    image: "/menu/camarones-zarandeados-individual.jpeg",
    badge: "Individual",
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#fff7ed]">
      <Header />
      <Hero />

      <section id="menu" className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-[#145da0] px-4 py-1 text-sm font-bold text-white">
            Nuestro menú
          </span>

          <h2 className="mt-4 text-3xl font-black text-[#0b3b66] md:text-5xl">
            Platillos con puro poder antojable
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Elige tu favorito y haz tu pedido. Tenemos opciones para compartir
            y porciones individuales listas para conquistar el hambre.
          </p>
        </div>

        <MenuSection
          id="charolas"
          title="Charolas"
          subtitle="Ideales para compartir y disfrutar con todo el sabor del mar."
          items={charolas}
          columns="sm:grid-cols-2 xl:grid-cols-3"
        />

        <div className="mt-16">
          <MenuSection
            id="individuales"
            title="Individuales"
            subtitle="Porciones personales para cuando el antojo llega con nombre y apellido."
            items={individuales}
            columns="sm:grid-cols-2 xl:grid-cols-4"
          />
        </div>

        <Contact />

        <footer className="pb-8 pt-10 text-center">
          <p className="text-sm font-medium text-slate-500">
            © {new Date().getFullYear()} Mariscos El Arandense. Todos los derechos reservados.
          </p>
        </footer>
      </section>
    </main>
  );
}