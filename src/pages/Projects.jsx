import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/Projects";

const PROJECTS_PER_LOAD = 10;

function Projects() {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_LOAD);
  const loaderRef = useRef(null);

  const loadMoreProjects = () => {
    setVisibleCount((count) => Math.min(count + PROJECTS_PER_LOAD, projects.length));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreProjects();
        }
      },
      {
        rootMargin: "300px",
      }
    );

    const loader = loaderRef.current;

    if (loader) {
      observer.observe(loader);
    }

    return () => {
      if (loader) {
        observer.unobserve(loader);
      }
    };
  }, []);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projects.length;

  return (
    <main className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="px-6 md:px-10 pt-24 pb-20">
        <div className="max-w-7xl mx-auto">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-5">
            Selected Work
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight">
            Projects
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-500 leading-relaxed">
            A collection of architectural spaces, residential environments,
            and contemporary projects shaped by material, light, and place.
          </p>

        </div>
      </section>


      {/* ================= PROJECTS ================= */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">

            {visibleProjects.map((project) => (

              <Link
                to={`/projects/${project.slug}`}
                key={project.id}
                className="group block"
              >

                {/* Image */}
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                  {/* View Project */}
                  <div className="absolute bottom-6 right-6">

                    <div className="bg-white px-5 py-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-sm tracking-wide">
                        View Project →
                      </span>
                    </div>

                  </div>

                </div>


                {/* Project Information */}
                <div className="mt-6">

                  <div className="flex items-center justify-between mb-3">

                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      {project.category}
                    </p>

                    <p className="text-xs text-gray-400">
                      {project.year}
                    </p>

                  </div>

                  <h2 className="text-2xl md:text-3xl font-light tracking-tight group-hover:underline underline-offset-4">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-gray-500 leading-relaxed max-w-xl">
                    {project.description}
                  </p>

                </div>

              </Link>

            ))}

          </div>


          {/* ================= INFINITE SCROLL LOADER ================= */}
          <p className="mt-12 text-center text-xs uppercase tracking-[0.2em] text-gray-500">
            Showing {visibleProjects.length} of {projects.length} projects
          </p>

          {hasMoreProjects && (
            <div
              ref={loaderRef}
              className="flex flex-col items-center justify-center py-28"
            >

            <div className="w-6 h-6 border-2 border-gray-300 border-t-black rounded-full animate-spin mb-5" />

            <p className="text-sm text-gray-400 tracking-wide">
              Scroll to load more projects
            </p>

            <button
              type="button"
              onClick={loadMoreProjects}
              className="mt-5 border border-black px-5 py-3 text-xs uppercase tracking-[0.16em] hover:bg-black hover:text-white"
            >
              Load more projects
            </button>

            </div>
          )}

          {!hasMoreProjects && (
            <p className="py-20 text-center text-xs uppercase tracking-[0.2em] text-gray-400">
              All projects loaded
            </p>
          )}

        </div>
      </section>

    </main>
  );
}

export default Projects;
