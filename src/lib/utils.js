import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getRiskClass(score) {
  if (score <= 30) return 'risk-stable';
  if (score <= 60) return 'risk-moderate';
  if (score <= 85) return 'risk-unstable';
  return 'risk-critical';
}

export function getRiskLabel(score) {
  if (score <= 30) return 'STABLE';
  if (score <= 60) return 'MODERATE';
  if (score <= 85) return 'UNSTABLE';
  return 'CRITICAL';
}

export function getRiskColor(score) {
  if (score <= 30) return '#10b981';
  if (score <= 60) return '#f59e0b';
  if (score <= 85) return '#f97316';
  return '#ef4444';
}

export function getClearanceBadgeClass(level) {
  const map = {
    observer: 'badge-observer',
    researcher: 'badge-researcher',
    chronologist: 'badge-chronologist',
    admin: 'badge-admin',
  };
  return map[level?.toLowerCase()] || 'badge-observer';
}

export function formatDate(dateStr) {
  if (!dateStr) return 'Unknown';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

export function truncate(str, len = 120) {
  if (!str) return '';
  return str.length > len ? str.slice(0, len) + '…' : str;
}
