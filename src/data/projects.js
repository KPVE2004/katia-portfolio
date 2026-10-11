import bcBoutique from '../assets/projects/bc-boutique.png';
import compiladorKIA from '../assets/projects/compilador-kia.png';
import mnistPro from '../assets/projects/mnist-pro.png';
import thermonet from '../assets/projects/thermonet.png';
import agenteConversacional from '../assets/projects/agente-conversacional.png';
import deteccionFatiga from '../assets/projects/deteccion-fatiga.png';


export const projects = [
  {
    id: 1,
    title: 'BC Boutique',
    description:
      'Página web para una boutique de moda, diseñada desde cero en Figma (18 pantallas) e implementada en 7 páginas interactivas. Desarrollé el frontend completo: catálogo, detalle, cesta, favoritos, login, búsqueda y menú móvil.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    image: bcBoutique,
    github: 'https://github.com/KPVE2004/bc-boutique',
    demo: null,
    status: 'Completado',
    category: 'frontend',
    year: 2025,
  },
  {
    id: 2,
    title: 'Compilador KIA',
    description:
      'Compilador didáctico web con análisis léxico, sintáctico LR y semántico. Diseñé la interfaz completa (editor, pestañas de resultados y barra de herramientas) y la identidad visual.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: compiladorKIA,
    github: 'https://github.com/KPVE2004/compilador-kia',
    demo: null,
    status: 'Completado',
    category: 'frontend',
    year: 2025,
  },
  {
    id: 3,
    title: 'Driver Fatigue Detection',
    description:
      'Sistema de visión por computadora que detecta fatiga en conductores con MobileNetV2 (99.02% precisión). Mi rol: Fine-Tuning (fase 2), evaluación del modelo y desarrollo del frontend con acceso a cámara web.',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'Docker'],
    image: deteccionFatiga,
    github: 'https://github.com/KPVE2004/deteccion-fatiga-conductores',
    demo: null,
    status: 'Completado',
    category: 'ai',
    year: 2026,
  },
  {
    id: 4,
    title: 'MNIST Pro',
    description:
      'Reconocedor de dígitos escritos a mano con una CNN (99.17% precisión en test). Incluye API con FastAPI, interfaz web para dibujar o subir dígitos con gráfica de probabilidades, y contenedor Docker.',
    stack: ['Python', 'Keras', 'FastAPI', 'Docker'],
    image: mnistPro,
    github: 'https://github.com/KPVE2004/mnist-digit-recognizer',
    demo: null,
    status: 'Completado',
    category: 'ai',
    year: 2026,
  },
  {
    id: 5,
    title: 'ThermoNet',
    description:
      'Conversor Celsius → Fahrenheit con red neuronal en Keras (error máximo 0.0001 °F). Incluye API con FastAPI, interfaz web con slider y predicción en tiempo real, y contenedor Docker.',
    stack: ['Python', 'Keras', 'FastAPI', 'Docker'],
    image: thermonet,
    github: 'https://github.com/KPVE2004/thermonet',
    demo: null,
    status: 'Completado',
    category: 'ai',
    year: 2026,
  },
  {
    id: 6,
    title: 'Minimal Conversational Agent',
    description:
      'Agente conversacional construido con LangChain y Groq. Rediseñé la interfaz web del chat y agregué un indicador de "escribiendo". Trabajé en una rama propia e integré los cambios mediante Pull Request.',
    stack: ['Python', 'LangChain', 'Groq', 'FastAPI', 'Django'],
    image: agenteConversacional,
    github: 'https://github.com/Omarvl-XCoder/Agente-Conversasional-Minimo',
    demo: null,
    status: 'En desarrollo',
    category: 'collab',
    year: 2026,
  },
  {
    id: 7,
    title: 'Fleet Management with AI',
    description:
      'Sistema de gestión de flotillas basado en microservicios, con detección de fatiga que genera alertas en tiempo real. Integrante del Development Team en equipo Scrum (JIRA, Pull Requests).',
    stack: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'],
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80',
    github: 'https://github.com/AngelCanelaaa/gestion-flotillas-ia',
    demo: null,
    status: 'En desarrollo',
    category: 'collab',
    year: 2026,
  },
];

export const categories = [
  { id: 'all', label: 'Todos', icon: '📦' },
  { id: 'frontend', label: 'Frontend', icon: '🎨' },
  { id: 'ai', label: 'IA', icon: '🤖' },
  { id: 'collab', label: 'Colaborativos', icon: '👥' },
];