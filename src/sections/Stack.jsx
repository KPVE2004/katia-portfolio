import { techStack } from '../data/stack';

export default function Stack() {
  return (
    <section id="stack" className="py-24 bg-cream-light">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
            Stack Tecnológico
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-dark">
            Herramientas que uso
          </h2>
          <p className="text-gray-text mt-4 max-w-2xl mx-auto">
            Tecnologías con las que he trabajado en proyectos académicos y personales.
          </p>
        </div>

        {/* Grid de categorías */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(techStack).map(([key, category]) => (
            <div
              key={key}
              className="bg-white rounded-3xl p-8 border border-dark/5 hover:border-primary/20 hover:shadow-lg transition-all"
            >
              {/* Header de categoría */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="font-display text-xl font-bold text-dark">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-4 py-2 bg-cream text-dark text-sm font-medium rounded-full hover:bg-primary hover:text-white transition-colors cursor-default"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}