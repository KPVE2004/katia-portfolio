export default function About() {
  const facts = [
    { label: 'Semestre', value: '9.º' },
    { label: 'Promedio', value: '90.81' },
    { label: 'Proyectos', value: '7+' },
    { label: 'Idiomas', value: 'ES · EN' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
            Sobre mí
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-dark">
            Conóceme un poco más
          </h2>
        </div>

        {/* Contenido principal */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda: texto */}
          <div className="space-y-6 text-gray-text text-lg leading-relaxed">
            <p>
              Soy <span className="font-semibold text-dark">Katia Paola Victoria Escalera</span>,
              estudiante de 9.º semestre de Ingeniería en Sistemas Computacionales
              en el TecNM – Instituto Tecnológico de Jiquilpan.
            </p>

            <p>
              Mi especialidad es el{' '}
              <span className="font-semibold text-dark">
                Desarrollo de Aplicaciones Inteligentes Web-Móvil
              </span>
              . Me apasiona el{' '}
              <span className="font-semibold text-dark">desarrollo frontend</span> y el
              diseño de interfaces: construyo experiencias web con React, HTML, CSS
              y JavaScript, e integro modelos de IA con TensorFlow/Keras mediante
              APIs con FastAPI.
            </p>

            <p>
              He participado en proyectos como un compilador didáctico web, un
              reconocedor de dígitos con CNN (99.17% de precisión), un sistema
              de detección de fatiga en conductores (99.02%) y agentes
              conversacionales, trabajando bajo metodología Scrum.
            </p>

            <p className="font-medium text-dark">
              Actualmente busco realizar mis{' '}
              <span className="text-primary">residencias profesionales</span> en un
              equipo de desarrollo de software donde pueda aportar en frontend y
              seguir creciendo como desarrolladora.
            </p>
          </div>

          {/* Columna derecha: facts + links */}
          <div className="space-y-6">
            {/* Facts grid */}
            <div className="grid grid-cols-2 gap-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-cream-light border border-primary/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-colors"
                >
                  <p className="text-sm text-gray-text mb-1">{fact.label}</p>
                  <p className="font-display text-2xl font-bold text-dark">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Info extra */}
            <div className="bg-cream-light border border-primary/10 rounded-2xl p-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">🎓</span>
                <div>
                  <p className="font-semibold text-dark">Educación</p>
                  <p className="text-sm text-gray-text">
                    Ing. en Sistemas Computacionales · TecNM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-semibold text-dark">Ubicación</p>
                  <p className="text-sm text-gray-text">
                    Jiquilpan, Michoacán, México
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">✉️</span>
                <div>
                  <p className="font-semibold text-dark">Contacto</p>
                  <a
                    href="mailto:kp_victoria08@hotmail.com"
                    className="text-sm text-primary hover:underline break-all"
                  >
                    kp_victoria08@hotmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Botones */}
            <div className="flex gap-3">
              <a
                href="https://github.com/KPVE2004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-6 py-3 bg-dark text-white font-semibold rounded-full hover:bg-primary transition-colors"
              >
                Ver GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/katia-victoria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-6 py-3 bg-white border-2 border-dark/10 text-dark font-semibold rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}