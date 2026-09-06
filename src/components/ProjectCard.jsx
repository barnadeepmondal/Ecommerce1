import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block"
    >
      {/* Image */}
      <div className="overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Project Information */}
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl text-gray-900 group-hover:opacity-60 transition-opacity">
            {project.title}
          </h3>

          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-500">
            {project.category}
          </p>
        </div>

        <span className="text-sm text-gray-500">
          {project.year}
        </span>
      </div>
    </Link>
  );
}

export default ProjectCard;
