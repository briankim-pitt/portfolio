import type { ImageMetadata } from 'astro';
import sudoL7Preview from '../assets/link-previews/sudo-l7.webp';
import tempoPreview from '../assets/link-previews/tempo.jpg';
import tempoLogo from '../assets/project-logos/tempo.png';
import wanderCartLogo from '../assets/project-logos/wandercart.svg?url';

export type Technology =
  | 'swiftui'
  | 'python'
  | 'django'
  | 'redis'
  | 'applemusic'
  | 'fastapi'
  | 'openai'
  | 'googledrive'
  | 'sqlite'
  | 'supabase'
  | 'postgresql'
  | 'typescript'
  | 'nodejs'
  | 'evaluation'
  | 'rl'
  | 'redteaming';

interface WorkItem {
  title: string;
  logo?: { src: string; width: number; height: number };
  category: string;
  href: string;
  role?: string;
  period?: string;
  description: string;
  technologies: Technology[];
  stackLabel?: string;
  link?: {
    label: string;
    href: string;
    preview?: {
      title: string;
      description: string;
      site: string;
      image: ImageMetadata;
    };
  };
}

export const work: WorkItem[] = [
  {
    title: 'Surge AI',
    category: 'Work',
    href: 'https://surgehq.ai/blog/sudo-l7',
    role: 'Agent Coding Benchmark Author · Contract',
    period: 'Aug 2026–Present · Remote',
    description:
      'Build coding RL environments and benchmarks around realistic software engineering tasks. Review and red-team model outputs, write tests and evaluation rubrics, and provide structured feedback to improve agent performance.',
    technologies: ['evaluation', 'rl', 'redteaming'],
    stackLabel: 'Focus areas',
    link: {
      label: 'Contributor to sudo L7',
      href: 'https://surgehq.ai/blog/sudo-l7',
      preview: {
        title: 'sudo L7: Can Coding Agents Act Like Staff Engineers?',
        description: 'A benchmark for coding agents’ engineering judgment.',
        site: 'surgehq.ai',
        image: sudoL7Preview,
      },
    },
  },
  {
    title: 'Tempo',
    logo: { src: tempoLogo.src, width: tempoLogo.width, height: tempoLogo.height },
    category: 'iOS app',
    href: 'https://www.ourtempo.app',
    description:
      'A social music app with daily song and photo posts, friend feeds, messaging, and personalized discovery. Built with SwiftUI and a Django Ninja API, with Apple Music search and previews plus push notifications.',
    technologies: ['swiftui', 'python', 'django', 'postgresql', 'redis', 'applemusic'],
    link: {
      label: 'Visit Tempo',
      href: 'https://www.ourtempo.app',
      preview: {
        title: 'Tempo — Share Your Music',
        description: 'Share songs and discover what your friends are listening to.',
        site: 'ourtempo.app',
        image: tempoPreview,
      },
    },
  },
  {
    title: 'AI Operations Assistant',
    category: 'Web app · RAG',
    href: 'https://github.com/briankim-pitt/AI-operations-assistant',
    description:
      'An operations assistant that answers questions from Google Drive documents with source citations. Combines semantic and Japanese keyword search, supports follow-up questions, and caches embeddings in SQLite.',
    technologies: ['python', 'fastapi', 'openai', 'googledrive', 'sqlite'],
    link: {
      label: 'View source',
      href: 'https://github.com/briankim-pitt/AI-operations-assistant',
    },
  },
  {
    title: 'WanderCart',
    logo: { src: wanderCartLogo, width: 212, height: 42 },
    category: 'iOS app',
    href: 'https://github.com/briankim-pitt/ShoppingApp',
    description:
      'A shopping simulator for saving real products and checking out with virtual WanderCoins. Includes wishlists, product imports, and simulated delivery tracking, backed by a transactional wallet and order system.',
    technologies: ['swiftui', 'supabase', 'postgresql', 'typescript', 'nodejs'],
    link: { label: 'View source', href: 'https://github.com/briankim-pitt/ShoppingApp' },
  },
];
