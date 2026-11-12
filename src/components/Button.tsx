@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

:root {
  --bg: #f8fafc;
  --surface: #ffffff;
  --text: #0f172a;
  --muted: #64748b;
  --border: #e2e8f0;
  --accent: #2563eb;
  --secondary: #10b981;
}

html.dark {
  --bg: #020617;
  --surface: #0f172a;
  --text: #f8fafc;
  --muted: #94a3b8;
  --border: #1e293b;
  --accent: #3b82f6;
  --secondary: #34d399;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  letter-spacing: -0.01em;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  scrollbar-color: rgba(148, 163, 184, 0.8) transparent;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cg fill='%230f172a' fill-opacity='0.12'%3E%3Ccircle cx='8' cy='8' r='0.8'/%3E%3Ccircle cx='48' cy='16' r='0.7'/%3E%3Ccircle cx='96' cy='10' r='0.7'/%3E%3Ccircle cx='128' cy='52' r='0.8'/%3E%3Ccircle cx='24' cy='72' r='0.7'/%3E%3Ccircle cx='72' cy='88' r='0.8'/%3E%3Ccircle cx='108' cy='120' r='0.7'/%3E%3Ccircle cx='150' cy='96' r='0.7'/%3E%3C/g%3E%3C/svg%3E");
  z-index: 9999;
}

html.dark body::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cg fill='%23f8fafc' fill-opacity='0.12'%3E%3Ccircle cx='8' cy='8' r='0.8'/%3E%3Ccircle cx='48' cy='16' r='0.7'/%3E%3Ccircle cx='96' cy='10' r='0.7'/%3E%3Ccircle cx='128' cy='52' r='0.8'/%3E%3Ccircle cx='24' cy='72' r='0.7'/%3E%3Ccircle cx='72' cy='88' r='0.8'/%3E%3Ccircle cx='108' cy='120' r='0.7'/%3E%3Ccircle cx='150' cy='96' r='0.7'/%3E%3C/g%3E%3C/svg%3E");
}

* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  letter-spacing: -0.02em;
  margin: 0;
  font-weight: 600;
  line-height: 1.05;
}

p {
  margin: 0;
}

::selection {
  background: rgba(37, 99, 235, 0.18);
}

.max-w-content {
  max-width: 1280px;
}

.hero-grid {
  background-image: linear-gradient(to right, rgba(148, 163, 184, 0.12) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(148, 163, 184, 0.12) 1px, transparent 1px);
  background-size: 24px 24px;
}

.section-shell {
  @apply mx-auto max-w-content px-6 md:px-12;
}

.h1-display {
  font-size: clamp(3rem, 8vw, 6.5rem);
  line-height: 0.94;
  letter-spacing: -0.06em;
}

.h2-display {
  font-size: clamp(2.25rem, 5vw, 4rem);
  line-height: 1.02;
}

.h3-display {
  font-size: 1.5rem;
}

.copy-body {
  font-size: 17px;
  line-height: 1.6;
  max-width: 65ch;
}

.mono-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.button-surface {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.button-surface::before {
  content: "";
  position: absolute;
  inset: 0;
  transform: scaleX(0);
  transform-origin: left center;
  background: rgba(15, 23, 42, 0.06);
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: -1;
}

html.dark .button-surface::before {
  background: rgba(248, 250, 252, 0.08);
}

.button-surface:hover::before {
  transform: scaleX(1);
}

.text-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.text-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 1px;
  transform-origin: left center;
  transform: scaleX(0);
  background: currentColor;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.text-link:hover::after,
.text-link:focus-visible::after {
  transform: scaleX(1);
}

.reveal-item {
  opacity: 0;
  transform: translateY(24px);
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}

.card-tilt {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
}

.card-tilt:hover {
  box-shadow: 0 28px 80px rgba(15, 23, 42, 0.09);
}

.theme-toggle-icon {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease;
}

.theme-toggle-button[data-state='dark'] .theme-toggle-icon {
  transform: rotate(20deg) scale(1.1);
}

.theme-toggle-button[data-state='light'] .theme-toggle-icon {
  transform: rotate(-20deg) scale(1.08);
}

@media (max-width: 768px) {
  .section-shell {
    @apply px-5;
  }
}
