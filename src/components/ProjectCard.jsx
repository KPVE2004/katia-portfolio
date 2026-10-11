export default function ProjectCard({ project }) {
  const statusColors = {
    Completado: 'bg-green-100 text-green-700 border-green-200',
    'En desarrollo': 'bg-amber-100 text-amber-700 border-amber-200',
  };

  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-dark/5 hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Imagen */}
      <div className="relative h-52 overflow-hidden bg-cream">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Badge de status */}
        <span
          className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full border ${
            statusColors[project.status]
          } bg-white/95 backdrop-blur-sm`}
        >
          {project.status}
        </span>
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-1">
        {/* Título */}
        <h3 className="font-display text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-gray-text leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-cream text-dark text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-dark/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-dark hover:text-primary transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Código
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}