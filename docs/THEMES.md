# Theme Guide

## Overview

The Landing Page Generator includes 20+ professionally designed themes.

## Available Themes

| Theme | Category | Primary | Accent |
|-------|----------|---------|--------|
| Premium | Luxury | #0f2027 | #ffd700 |
| Elegant | Luxury | #2c1810 | #c9a96e |
| Modern | Contemporary | #0f172a | #3b82f6 |
| Luxury | Premium | #1a0a2e | #ffd700 |
| Dark | Modern | #0f0f0f | #ffd700 |
| Light | Minimal | #ffffff | #0f172a |
| Neon | Bold | #0f172a | #22d3ee |
| Pastel | Soft | #fdf2f8 | #db2777 |
| Corporate | Professional | #0f2027 | #e2e8f0 |
| Creative | Artistic | #fff7ed | #f97316 |
| Tech | Modern | #f0f9ff | #0284c7 |
| Nature | Organic | #ecfdf5 | #10b981 |
| Vintage | Retro | #fef9e7 | #a67c52 |
| Glass | Modern | rgba(255,255,255,0.3) | #6366f1 |
| Futuristic | Sci-Fi | #0b1120 | #06b6d4 |
| Bold | Strong | #0c0a1e | #ef4444 |
| Clean | Minimal | #ffffff | #3b82f6 |
| Gradient | Modern | linear-gradient(145deg, #f0f4ff, #e6edf9) | #7c3aed |
| Retro | Vintage | #fef3c7 | #d97706 |
| Playful | Fun | #fdf2f8 | #ec4899 |

## Creating a Custom Theme

Add to `apps/web/src/lib/themes.ts`:

```typescript
{
  id: 'custom',
  name: 'Custom Theme',
  category: 'Custom',
  primary: '#your-primary',
  accent: '#your-accent',
  background: '#your-bg',
  text: '#your-text'
}
```

## Theme Usage

Select a theme in the builder to instantly apply it to the preview.

Themes control:
- Primary and accent colors
- Background and text colors
- Button styles
- Card styles
- Overall mood and feel
