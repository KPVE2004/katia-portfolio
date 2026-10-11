import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'kp_victoria08@hotmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactCards = [
    {
      icon: '📧',
      title: 'Email',
      value: email,
      action: handleCopyEmail,
      actionLabel: copied ? '¡Copiado!' : 'Copiar email',
      href: null,
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/katia-victoria',
      action: null,
      actionLabel: 'Abrir LinkedIn',
      href: 'https://www.linkedin.com/in/katia-victoria',
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'github.com/KPVE2004',
      action: null,
      actionLabel: 'Ver GitHub',
      href: 'https://github.com/KPVE2004',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
            Contacto
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Estoy buscando <span className="text-primary font-semibold">residencias profesionales</span> en
            equipos de desarrollo de software donde pueda aportar en frontend y seguir aprendiendo.
          </p>
        </div>

        {/* 3 tarjetas de contacto */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-primary/40 hover:bg-white/10 transition-all group"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="font-display text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm text-white/60 mb-6 break-all">{card.value}</p>

              {card.href ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors group-hover:gap-3"
                >
                  {card.actionLabel}
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
              ) : (
                <button
                  onClick={card.action}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors group-hover:gap-3"
                >
                  {card.actionLabel}
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
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center">
          <p className="text-white/60 mb-6">¿Prefieres ver mi CV primero?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/CV-Katia-Victoria-ES.pdf"
              download
              className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all hover:scale-105 shadow-lg"
            >
              🇲🇽 Descargar CV (Español)
            </a>
            <a
              href="/CV-Katia-Victoria-EN.pdf"
              download
              className="px-8 py-4 bg-white text-dark font-semibold rounded-full hover:bg-cream transition-all hover:scale-105"
            >
              🇬🇧 Download CV (English)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}