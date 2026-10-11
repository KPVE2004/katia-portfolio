import { useState } from 'react';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const [showCvMenu, setShowCvMenu] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-light via-cream to-cream-light relative overflow-hidden pt-24"
    >
      {/* Decoración de fondo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          
          {/* Columna izquierda: texto */}
          <div className="text-center md:text-left">
            {/* Etiqueta superior */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-dark">
                Disponible para residencias
              </span>
            </div>

            {/* Nombre */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-dark mb-4 leading-tight">
              Katia Paola
              <br />
              <span className="text-primary">Victoria Escalera</span>
            </h1>

            {/* Rol */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-dark/80 mb-6">
              Frontend &amp; AI Developer
            </h2>

            {/* Descripción */}
            <p className="text-base sm:text-lg md:text-xl text-gray-text max-w-2xl mb-10 leading-relaxed">
              Estudiante de 9.º semestre de Ingeniería en Sistemas Computacionales.
              Construyo interfaces web con{' '}
              <span className="font-semibold text-dark">React</span> e integro
              modelos de IA con{' '}
              <span className="font-semibold text-dark">FastAPI</span> y{' '}
              <span className="font-semibold text-dark">TensorFlow/Keras</span>.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
              <a
                href="#projects"
                className="px-8 py-4 bg-dark text-white font-semibold rounded-full hover:bg-primary transition-all hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                Ver proyectos
              </a>

              {/* Botón Descargar CV con menú */}
              <div className="relative">
                <button
                  onClick={() => setShowCvMenu(!showCvMenu)}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-dark font-semibold rounded-full border-2 border-dark/10 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                >
                  Descargar CV
                  <svg
                    className={`w-4 h-4 transition-transform ${showCvMenu ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Menú desplegable */}
                {showCvMenu && (
                  <div className="absolute top-full mt-2 left-0 sm:left-auto sm:right-0 bg-white rounded-2xl shadow-xl border border-dark/10 overflow-hidden min-w-[200px] z-20">
                    <a
                      href="/CV-Katia-Victoria-ES.pdf"
                      download
                      className="flex items-center gap-3 px-5 py-3 hover:bg-cream transition-colors border-b border-dark/5"
                      onClick={() => setShowCvMenu(false)}
                    >
                      <span className="text-xl">🇲🇽</span>
                      <span className="text-sm font-medium text-dark">Español</span>
                    </a>
                    <a
                      href="/CV-Katia-Victoria-EN.pdf"
                      download
                      className="flex items-center gap-3 px-5 py-3 hover:bg-cream transition-colors"
                      onClick={() => setShowCvMenu(false)}
                    >
                      <span className="text-xl">🇬🇧</span>
                      <span className="text-sm font-medium text-dark">English</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Iconos sociales */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/KPVE2004"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-dark/10 text-dark hover:bg-dark hover:text-white transition-all"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/katia-victoria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-dark/10 text-dark hover:bg-dark hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:kp_victoria08@hotmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-dark/10 text-dark hover:bg-dark hover:text-white transition-all"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

                    {/* Columna derecha: foto */}
          <div className="flex justify-center md:justify-end order-first md:order-last">
            <div className="relative">
              {/* Anillo decorativo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/40 blur-md opacity-30 scale-110"></div>
              
              {/* Foto circular */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={profileImg}
                  alt="Katia Paola Victoria Escalera"
                  className="w-full h-full object-cover object-[center_25%]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}