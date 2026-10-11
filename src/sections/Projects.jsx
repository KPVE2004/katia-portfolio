import { useState } from 'react';
import { projects, categories } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
            Proyectos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-dark mb-4">
            Lo que he construido
          </h2>
          <p className="text-gray-text max-w-2xl mx-auto">
            Una selección de proyectos académicos, personales y colaborativos
            que reflejan mi experiencia en frontend, IA y desarrollo full-stack.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === cat.id
                  ? 'bg-dark text-white border-dark'
                  : 'bg-white text-dark border-dark/10 hover:border-primary hover:text-primary'
              }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Contador + CTA */}
        <div className="text-center mt-14">
          <p className="text-sm text-gray-text mb-4">
            {filteredProjects.length}{' '}
            {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'} mostrados
          </p>
          <a
            href="https://github.com/KPVE2004?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cream text-dark font-semibold rounded-full hover:bg-primary hover:text-white transition-all"
          >
            Ver todos en GitHub
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}