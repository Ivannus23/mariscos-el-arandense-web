import MenuCard from "./MenuCard";

type MenuItem = {
  name: string;
  description?: string;
  price: string;
  image: string;
  badge?: string;
};

type MenuSectionProps = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
  columns?: string;
};

export default function MenuSection({
  id,
  title,
  subtitle,
  items,
  columns = "sm:grid-cols-2 xl:grid-cols-3",
}: MenuSectionProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-8">
        <h3 className="text-2xl font-black text-[#0b3b66] md:text-4xl">
          {title}
        </h3>
        <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p>
      </div>

      <div className={`grid gap-6 ${columns}`}>
        {items.map((item) => (
          <MenuCard
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            badge={item.badge}
          />
        ))}
      </div>
    </section>
  );
}