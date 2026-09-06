import { Link, useParams } from "react-router-dom";
import projects from "../data/Projects";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  // If project doesn't exist
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="font-serif text-4xl text-gray-900">
          Project Not Found
        </h1>

        <Link
          to="/projects"
          className="mt-6 border-b border-gray-900 pb-1 text-sm uppercase tracking-widest"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white text-gray-900">

      {/* Hero Image */}
      <section className="pt-24 md:pt-32">
        <div className="w-full h-[55vh] md:h-[70vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Project Heading */}
      <section className="px-6 md:px-10 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-5">
                {project.category} · {project.year}
              </p>

              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
                {project.title}
              </h1>
            </div>

            <Link
              to="/projects"
              className="text-sm uppercase tracking-[0.2em] border-b border-gray-900 pb-2 w-fit hover:opacity-50 transition-opacity"
            >
              ← All Projects
            </Link>

          </div>

        </div>
      </section>

      {/* Project Information */}
      <section className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-24">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">

            {/* Description */}
            <div className="lg:col-span-2">

              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-6">
                About The Project
              </p>

              <p className="font-serif text-3xl md:text-4xl leading-tight text-gray-900">
                {project.description}
              </p>

            </div>

            {/* Project Details */}
            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-6">
                Project Information
              </p>

              <div className="space-y-5">

                <div className="border-b border-gray-200 pb-4">
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Category
                  </p>
                  <p className="mt-2 text-sm">
                    {project.category}
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Year
                  </p>
                  <p className="mt-2 text-sm">
                    {project.year}
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Location
                  </p>
                  <p className="mt-2 text-sm">
                    {project.location}
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Area
                  </p>
                  <p className="mt-2 text-sm">
                    {project.area}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Design Concept */}
      <section className="bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-20 md:py-32">

          <div className="max-w-3xl">

            <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-8">
              Design Philosophy
            </p>

            <p className="font-serif text-3xl md:text-5xl leading-tight">
              {project.concept}
            </p>

          </div>

        </div>
      </section>

      {/* Materials */}
      <section className="px-6 md:px-10 lg:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-6">
                Materials
              </p>

              <h2 className="font-serif text-4xl md:text-5xl">
                Material Palette
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">

              {project.materials.map((material, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-6"
                >
                  <p className="text-sm">
                    {material}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-100 px-6 md:px-10 lg:px-20 py-20 md:py-28">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-6">
            Continue Exploring
          </p>

          <h2 className="font-serif text-5xl md:text-7xl">
            More Projects
          </h2>

          <Link
            to="/projects"
            className="inline-block mt-10 border-b border-gray-900 pb-2 text-sm uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
          >
            View All Projects
          </Link>

        </div>

      </section>

    </main>
  );
}

export default ProjectDetails;
