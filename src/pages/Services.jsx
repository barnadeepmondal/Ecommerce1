import { Link } from "react-router-dom";

const disciplines = [
  {
    number: "01",
    category: "Residential Architecture",
    title: "Sanctuaries of Concrete & Light",
    description:
      "Designing private residences that blur the boundary between interior comfort and natural landscapes. We utilize raw materials—exposed concrete, natural woods, and vast expanses of glass—to create homes that feel both monumental and intimately protective.",
    link: "Explore Residential Portfolio",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    category: "Interior Masterplanning",
    title: "Sculpting Void & Form",
    description:
      "Our interior approach focuses on spatial choreography, not just rooms, but the transitions between them, employing sculptural elements like sweeping staircases and strategic skylights to guide movement and perception.",
    link: "View Interior Works",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    category: "Commercial Design",
    title: "Atmospheres of Authority",
    description:
      "We create commercial environments—galleries, boutiques, and headquarters—that project a quiet confidence. By prioritizing extreme clarity and deliberate restraint, we design spaces that elevate brand identity and eliminate cognitive load.",
    link: "Discuss Commercial Projects",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
  },
];

function Discipline({ discipline, reverse }) {
  return (
    <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
      <div className={reverse ? "md:order-2" : ""}>
        <img
          src={discipline.image}
          alt={discipline.title}
          className="h-[330px] w-full object-cover md:h-[470px]"
        />
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
          {discipline.number} / {discipline.category}
        </p>
        <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight md:text-5xl">
          {discipline.title}
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-gray-600">
          {discipline.description}
        </p>
        <Link
          to="/inquiry"
          className="mt-8 inline-flex items-center gap-3 border-b border-black pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] hover:text-gray-600"
        >
          {discipline.link} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

function Services() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#181818]">
      <main>
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
          <h1 className="font-serif text-5xl md:text-7xl">Our Disciplines</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            We approach every project as a unique study in space, light, and material. Our services are tailored to discerning clients seeking architectural excellence that transcends trends, focusing on enduring quality and profound aesthetic resonance.
          </p>
        </section>

        <div className="mx-auto max-w-7xl space-y-28 px-6 pb-28 md:space-y-40 md:px-10 md:pb-40">
          {disciplines.map((discipline, index) => (
            <Discipline key={discipline.number} discipline={discipline} reverse={index === 1} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Services;
