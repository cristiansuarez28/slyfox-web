export interface Panel {
  titulo: string;
  valor: string;
  contexto: string;
  problemas: string[];
  beneficios: string[];
  incluye: string[];
  idealPara: string;
  ctaPrimario: string;
}

export const panels: Panel[] = [
  // ── 1. Software a la Medida ──────────────────────────────────────────────
  {
    titulo: 'Software hecho para tu operación, no para otra empresa',
    valor: 'Construimos sistemas que se adaptan a ti — no al revés.',
    contexto:
      'La mayoría de empresas termina adaptando su operación al software que compra. Nosotros hacemos lo contrario: entendemos cómo trabaja tu equipo y construimos la herramienta exacta que necesita, limpia, escalable y mantenible.',
    problemas: [
      'Procesos que no encajan en ningún SaaS del mercado',
      'Sistemas heredados que ya no aguantan el volumen',
      'Integraciones rotas entre herramientas que no se hablan',
    ],
    beneficios: [
      'Tu equipo opera con herramientas hechas para su flujo real',
      'Escalas sin reescribir todo desde cero',
      'Código limpio que cualquier desarrollador puede mantener',
    ],
    incluye: [
      'Levantamiento de requerimientos y diseño de arquitectura',
      'Desarrollo full-stack con tecnologías probadas',
      'Integración con APIs externas, CRMs, ERPs y plataformas de pago',
      'Entrega en ciclos cortos con revisiones continuas',
      'Documentación técnica y transferencia de conocimiento',
    ],
    idealPara:
      'Empresas medianas con procesos específicos que ningún software estándar resuelve, o startups que necesitan un MVP sólido para validar rápido.',
    ctaPrimario: 'Hablemos de tu proyecto',
  },

  // ── 2. Canales Digitales Unificados ──────────────────────────────────────
  {
    titulo: 'Todos tus canales en un solo lugar, sin caos operativo',
    valor: 'Menos herramientas sueltas. Más visibilidad de tu cliente.',
    contexto:
      'Cuando ventas opera en WhatsApp, soporte en correo y e-commerce en otra plataforma, nadie tiene el panorama completo del cliente. Eso cuesta dinero, clientes y oportunidades. Lo centralizamos.',
    problemas: [
      'Conversaciones perdidas entre canales desconectados',
      'Equipos de ventas y soporte sin visibilidad compartida',
      'Procesos manuales que consumen tiempo sin generar valor',
    ],
    beneficios: [
      'Tu equipo tiene al cliente completo en una sola pantalla',
      'Respuestas más rápidas y consistentes sin esfuerzo adicional',
      'Métricas reales de ventas, soporte y satisfacción',
    ],
    incluye: [
      'Integración de WhatsApp Business API, Instagram, correo y web',
      'CRM configurado para tu proceso de ventas real',
      'Chatbots de primer contacto y escalamiento inteligente',
      'Panel unificado con historial de cliente y métricas',
      'Automatización de seguimientos, recordatorios y notificaciones',
    ],
    idealPara:
      'Empresas con equipos comerciales o de soporte que atienden por múltiples canales y pierden información o velocidad en el proceso.',
    ctaPrimario: 'Quiero centralizar mis canales',
  },

  // ── 3. Transformación Digital ─────────────────────────────────────────────
  {
    titulo: 'De herramientas sueltas a un sistema que funciona',
    valor: 'No es instalar más software. Es rediseñar cómo opera tu empresa.',
    contexto:
      'La transformación digital falla cuando se impone sin entender la operación real. Partimos del diagnóstico: qué funciona, qué no, qué se puede automatizar. Luego construimos la ruta por etapas para que el equipo adopte sin trauma.',
    problemas: [
      'Procesos manuales que generan errores y consumen tiempo',
      'Herramientas que el equipo no usa porque no encajan en su flujo',
      'Incertidumbre sobre por dónde empezar',
    ],
    beneficios: [
      'Hoja de ruta clara, priorizada y realista',
      'Adopción tecnológica que el equipo abraza, no rechaza',
      'Capacidad de escalar sin contratar más gente para lo mismo',
    ],
    incluye: [
      'Diagnóstico tecnológico de la operación actual',
      'Identificación de quick wins y proyectos de mediano plazo',
      'Hoja de ruta digital por fases con priorización de impacto',
      'Implementación de automatizaciones en procesos críticos',
      'Acompañamiento en la adopción y formación del equipo',
    ],
    idealPara:
      'Empresas en crecimiento que sienten que la operación ya no escala sola y necesitan orden tecnológico antes de seguir sumando personas.',
    ctaPrimario: 'Solicitar diagnóstico',
  },

  // ── 4. Diseño UI/UX ───────────────────────────────────────────────────────
  {
    titulo: 'Interfaces que los usuarios entienden a la primera y que convierten',
    valor: 'Diseño que reduce fricción, aumenta retención y transmite profesionalismo.',
    contexto:
      'Un diseño bonito que nadie entiende no sirve. Un diseño funcional que se ve ordinario genera desconfianza. El balance entre claridad, conversión y percepción premium es lo que marca la diferencia entre un producto que se usa y uno que se abandona.',
    problemas: [
      'Usuarios que no entienden cómo usar el producto sin ayuda',
      'Interfaces que generan fricción y aumentan el abandono',
      'Equipos de desarrollo recibiendo diseños incompletos',
    ],
    beneficios: [
      'Flujos validados antes de escribir una línea de código',
      'Interfaces claras que reducen el tiempo de onboarding',
      'Producto que transmite profesionalismo y genera confianza',
    ],
    incluye: [
      'Research de usuarios: entrevistas, mapas de experiencia y benchmarking',
      'Arquitectura de información y flujos de navegación',
      'Wireframes de baja fidelidad para validación rápida',
      'Diseño de interfaz de alta fidelidad en Figma',
      'Sistema de diseño con componentes y tokens reutilizables',
    ],
    idealPara:
      'Startups o empresas que construyen un producto digital y quieren que el diseño sea un diferenciador competitivo, no un cuello de botella.',
    ctaPrimario: 'Hablemos del producto',
  },

  // ── 5. Seguridad y Datos ──────────────────────────────────────────────────
  {
    titulo: 'Protege lo que ya construiste antes de que algo falle',
    valor: 'La seguridad no es un gasto. Es lo que hace que tus clientes confíen en ti.',
    contexto:
      'La mayoría de empresas no piensa en seguridad hasta que ocurre un incidente. Para entonces, el daño — reputacional, económico y legal — ya está hecho. Auditamos antes de que eso pase, identificamos los riesgos reales y los resolvemos con criterio.',
    problemas: [
      'Vulnerabilidades en infraestructura que no son visibles hasta que se explotan',
      'Incumplimiento de regulaciones que generan riesgo legal',
      'Datos de clientes expuestos por falta de controles básicos',
    ],
    beneficios: [
      'Mapa claro de tus vulnerabilidades reales y su nivel de riesgo',
      'Cumplimiento normativo documentado y auditable',
      'Operación que resiste ataques comunes sin intervención constante',
    ],
    incluye: [
      'Auditoría de seguridad de aplicaciones e infraestructura',
      'Análisis de vulnerabilidades y reporte priorizado de hallazgos',
      'Implementación de cifrado, autenticación robusta y controles de acceso',
      'Plan de remediación y seguimiento post-auditoría',
      'Documentación para cumplimiento Ley 1581, GDPR e ISO 27001',
    ],
    idealPara:
      'Empresas que manejan datos de clientes, procesan pagos, o están en sectores regulados donde una brecha tiene consecuencias críticas.',
    ctaPrimario: 'Solicitar auditoría',
  },
];
