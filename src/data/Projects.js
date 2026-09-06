export const projects = [
  {
    id: "nexus-tower",
    title: "Nexus Tower",
    category: "Commercial",
    year: "2026",
    image: "/images/nexus-tower.jpg",
    description:
      "A contemporary vertical landmark designed to connect people, architecture, and the surrounding city through a refined glass and steel structure.",
  },

  {
    id: "glass-pavilion",
    title: "Glass Pavilion",
    category: "Residential",
    year: "2026",
    image: "/images/glass-pavilion.jpg",
    description:
      "A transparent pavilion that brings together architecture, natural light, and landscape to create an open and immersive experience.",
  },

  {
    id: "lumina-residence",
    title: "Lumina Residence",
    category: "Residential",
    year: "2026",
    image: "/images/lumina-residence.jpg",
    description:
      "A contemporary residence designed around natural light, quiet spaces, and a seamless relationship between the interior and exterior.",
  },

  {
    id: "modern-house",
    title: "Modern House",
    category: "Residential",
    year: "2025",
    image: "/images/project1.jpg",
    description:
      "A modern residential project focused on simplicity, natural materials, and functional living spaces.",
  },

  {
    id: "urban-studio",
    title: "Urban Studio",
    category: "Interior",
    year: "2025",
    image: "/images/project2.jpg",
    description:
      "A compact urban studio designed with a minimal approach and carefully considered details.",
  },

  {
    id: "concrete-house",
    title: "Concrete House",
    category: "Architecture",
    year: "2025",
    image: "/images/project3.jpg",
    description:
      "A bold architectural residence exploring concrete, shadow, texture, and natural light.",
  },

  {
    id: "open-gallery",
    title: "Open Gallery",
    category: "Cultural",
    year: "2025",
    image: "/images/project4.jpg",
    description:
      "An open gallery space designed to provide flexibility for exhibitions, installations, and cultural events.",
  },

  {
    id: "coastal-retreat",
    title: "Coastal Retreat",
    category: "Residential",
    year: "2024",
    image: "/images/project5.jpg",
    description:
      "A peaceful coastal retreat designed around natural ventilation, landscape, and uninterrupted views.",
  },

  {
    id: "minimal-office",
    title: "Minimal Office",
    category: "Commercial",
    year: "2024",
    image: "/images/project6.jpg",
    description:
      "A refined workplace where functionality and minimal architectural language come together.",
  },
];

const projectImages = [
  "/images/architecture.png",
  "/images/screen.jpg",
  "/images/timeless.png",
];

projects.forEach((project, index) => {
  project.slug = project.id;
  project.image = projectImages[index % projectImages.length];
  project.location = ["Kolkata, India", "Mumbai, India", "Bengaluru, India"][index % 3];
  project.area = `${(2800 + index * 425).toLocaleString("en-IN")} sq. ft.`;
  project.concept = "A thoughtful composition of natural light, durable materials, and calm, functional spaces.";
  project.materials = ["Natural Stone", "Oak", "Concrete", "Brass"];
});

const additionalProjects = Array.from({ length: 41 }, (_, index) => {
  const number = index + 10;
  const category = ["Residential", "Commercial", "Interior", "Cultural", "Hospitality"][index % 5];

  return {
    id: `studio-project-${number}`,
    slug: `studio-project-${number}`,
    title: `Studio Project ${String(number).padStart(2, "0")}`,
    category,
    year: String(2022 + (index % 5)),
    image: projectImages[index % projectImages.length],
    location: ["Kolkata, India", "Mumbai, India", "Bengaluru, India", "Goa, India", "New Delhi, India"][index % 5],
    area: `${(3200 + index * 350).toLocaleString("en-IN")} sq. ft.`,
    description: `A contemporary ${category.toLowerCase()} project designed around material honesty, natural light, and a lasting connection to place.`,
    concept: "A thoughtful composition of natural light, durable materials, and calm, functional spaces.",
    materials: ["Natural Stone", "Oak", "Concrete", "Brass"],
  };
});

projects.push(...additionalProjects);

export default projects;
