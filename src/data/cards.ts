import type { ImageMetadata } from 'astro';
import Filecode01  from '@images/filecode01.webp';
import Dataflow04  from '@images/dataflow04.webp';
import Currency    from '@images/currencydollarcircle.webp';
import Pentoo101   from '@images/pentool01.webp';
import Fingerprint from '@images/fingerprint-03_2x.webp';

export interface Tarjeta {
  src:         ImageMetadata;
  badge:       string;
  titulo:      string;
  descripcion: string;
  items:       [string, string, string];
  ctaCard:     string;
}

export const tarjetas: Tarjeta[] = [
  // ── 1. Software a la Medida ──────────────────────────────────────────────
  {
    src:   Filecode01,
    badge: 'Más solicitado',
    titulo: 'Software hecho para tu operación',
    descripcion:
      'Construimos sistemas que encajan exactamente en cómo trabaja tu equipo. Sin procesos forzados, sin funciones que nunca usarás.',
    items: [
      'Aplicaciones web y sistemas empresariales a medida',
      'Integración con tus herramientas actuales (APIs, CRMs, ERPs)',
      'Arquitectura limpia que escala cuando el negocio crece',
    ],
    ctaCard: 'Ver cómo lo hacemos',
  },

  // ── 2. Canales Digitales Unificados ──────────────────────────────────────
  {
    src:   Dataflow04,
    badge: 'Alto impacto',
    titulo: 'Todos tus canales, sin caos operativo',
    descripcion:
      'Centraliza ventas, atención y comunicación en una plataforma que da visibilidad total de tu cliente. Tu equipo opera mejor.',
    items: [
      'CRM, chatbots y automatización de procesos',
      'WhatsApp, redes sociales y e-commerce conectados',
      'Panel unificado para ventas y servicio al cliente',
    ],
    ctaCard: 'Explorar solución',
  },

  // ── 3. Transformación Digital ─────────────────────────────────────────────
  {
    src:   Currency,
    badge: 'Ideal para PYMES',
    titulo: 'De herramientas sueltas a un sistema que funciona',
    descripcion:
      'Analizamos cómo opera tu empresa y diseñamos una ruta tecnológica clara. Sin saltos bruscos, sin caos.',
    items: [
      'Diagnóstico tecnológico y hoja de ruta por etapas',
      'Automatización de procesos y flujos críticos',
      'Estrategia de adopción para equipos no técnicos',
    ],
    ctaCard: 'Ver enfoque',
  },

  // ── 4. Diseño UI/UX ───────────────────────────────────────────────────────
  {
    src:   Pentoo101,
    badge: 'Basado en datos',
    titulo: 'Interfaces que convierten desde el primer clic',
    descripcion:
      'Diseñamos desde la lógica del usuario, validamos con datos y entregamos listo para desarrollo. Sin fricción, sin confusión.',
    items: [
      'Investigación de usuarios, flujos y wireframes',
      'Interfaces web y móvil en Figma listas para desarrollo',
      'Pruebas de usabilidad y ciclos de mejora continua',
    ],
    ctaCard: 'Ver proceso',
  },

  // ── 5. Seguridad y Datos ──────────────────────────────────────────────────
  {
    src:   Fingerprint,
    badge: 'Cumplimiento normativo',
    titulo: 'Protege lo que ya construiste',
    descripcion:
      'Auditamos tu infraestructura, identificamos vulnerabilidades reales y te ponemos en cumplimiento normativo. Cero sorpresas.',
    items: [
      'Auditorías de seguridad y análisis de vulnerabilidades',
      'Cifrado de datos y protección frente a ataques',
      'Cumplimiento Ley 1581, GDPR e ISO 27001',
    ],
    ctaCard: 'Ver auditoría',
  },
];
