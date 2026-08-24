# 🚀 Premium Landing Page Generator

Generate stunning landing pages for 20+ categories including Real Estate, E-commerce, SaaS, Healthcare, Education, and more.

## ✨ Features

- **20+ Categories** - Real Estate, E-commerce, SaaS, Healthcare, Education, Fintech, Travel, Fashion, Food, Fitness, Beauty, Automotive, Entertainment, Nonprofit, Consulting, Technology, Insurance, Marketing, Advertising
- **100+ Templates** - 5 unique templates per category
- **20+ Themes** - Premium, Elegant, Modern, Luxury, Dark, Light, Neon, Pastel, Corporate, Creative, Tech, Nature, Vintage, Glass, Futuristic, Bold, Clean, Gradient, Retro, Playful
- **50+ Sections** - Hero, Features, Testimonials, Pricing, About, CTA, Menu, Footer, Gallery, Contact, Blog, Newsletter, Stats, Team, FAQ, Timeline, Clients, Videos, Promo, Announcement
- **Real-time Preview** - Live preview as you build
- **Drag & Drop Builder** - Rearrange sections easily
- **One-click Export** - Export to HTML, React, or Next.js
- **Responsive Design** - Mobile, Tablet, Desktop ready
- **Dark/Light Mode** - System preference aware
- **GitHub Actions** - Auto-deploy to GitHub Pages

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS + Styled Components
- **State**: Redux Toolkit + Zustand
- **Animation**: Framer Motion + GSAP
- **Drag & Drop**: React DnD + dnd-kit
- **Icons**: Font Awesome 6
- **Forms**: React Hook Form + Zod
- **Testing**: Jest + React Testing Library
- **CI/CD**: GitHub Actions

## 📂 Project Structure

```
landing-page-generator/
├── apps/
│   └── web/                 # Next.js frontend
│       ├── src/
│       │   ├── app/         # App router
│       │   ├── components/  # React components
│       │   ├── lib/         # Utilities & data
│       │   └── hooks/       # Custom hooks
│       └── public/          # Static assets
├── packages/
│   ├── core/               # Core generator logic
│   └── ui/                 # UI component library
├── data/
│   ├── categories/         # 20 category configs
│   ├── templates/          # 100+ templates
│   ├── themes/             # 20+ themes
│   └── sections/           # 50+ sections
├── .github/
│   └── workflows/          # CI/CD pipelines
└── docs/                   # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm 8+
- GitHub account

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/lpgenet.git
cd lpgenet

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Development

```bash
# Run all apps in development mode
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint
```

## 📦 Deployment

### GitHub Pages
1. Fork the repository
2. Enable GitHub Pages in settings
3. Push to main branch
4. Auto-deploy via GitHub Actions

### Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/lpgenet)

### Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/lpgenet)

## 📚 Documentation

- [API Reference](./docs/API.md)
- [Installation Guide](./docs/INSTALLATION.md)
- [Contributing Guidelines](./docs/CONTRIBUTING.md)
- [Category Guide](./docs/CATEGORIES.md)
- [Theme Guide](./docs/THEMES.md)

## 🎯 Categories

| Category | Icon | Templates | Sections |
|----------|------|-----------|----------|
| Real Estate | 🏡 | 5 | 12 |
| E-commerce | 🛒 | 5 | 12 |
| SaaS | ☁️ | 5 | 12 |
| Healthcare | 🏥 | 5 | 12 |
| Education | 📚 | 5 | 12 |
| Fintech | 💰 | 5 | 12 |
| Travel | ✈️ | 5 | 12 |
| Fashion | 👗 | 5 | 12 |
| Food | 🍔 | 5 | 12 |
| Fitness | 💪 | 5 | 12 |
| Beauty | 💄 | 5 | 12 |
| Automotive | 🚗 | 5 | 12 |
| Entertainment | 🎬 | 5 | 12 |
| Nonprofit | 🤝 | 5 | 12 |
| Consulting | 🧠 | 5 | 12 |
| Technology | 💻 | 5 | 12 |
| Insurance | 🛡️ | 5 | 12 |
| Marketing | 📢 | 5 | 12 |
| Advertising | 📣 | 5 | 12 |

## 🎨 Themes

| Theme | Primary | Accent |
|-------|---------|--------|
| Premium | #0f2027 | #ffd700 |
| Elegant | #2c1810 | #c9a96e |
| Modern | #0f172a | #3b82f6 |
| Luxury | #1a0a2e | #ffd700 |
| Dark | #0f0f0f | #ffd700 |
| Light | #ffffff | #0f172a |
| Neon | #0f172a | #22d3ee |
| Pastel | #fdf2f8 | #db2777 |
| Corporate | #0f2027 | #e2e8f0 |
| Creative | #fff7ed | #f97316 |
| Tech | #f0f9ff | #0284c7 |
| Nature | #ecfdf5 | #10b981 |
| Vintage | #fef9e7 | #a67c52 |
| Glass | rgba(255,255,255,0.3) | #6366f1 |
| Futuristic | #0b1120 | #06b6d4 |
| Bold | #0c0a1e | #ef4444 |
| Clean | #ffffff | #3b82f6 |
| Gradient | linear-gradient(145deg, #f0f4ff, #e6edf9) | #7c3aed |
| Retro | #fef3c7 | #d97706 |
| Playful | #fdf2f8 | #ec4899 |

## 🧩 Sections

Each category has 12 sections:
1. Hero - Main banner with headline and CTA
2. Features - Key features and benefits
3. Testimonials - Client reviews and ratings
4. Pricing - Pricing plans and packages
5. About - Company or product story
6. CTA - Call to action section
7. Menu - Navigation menu
8. Footer - Footer with links and info
9. Gallery - Image or video gallery
10. Contact - Contact form and info
11. Blog - Latest articles and posts
12. Stats - Statistics and metrics

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./docs/CONTRIBUTING.md).

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 🙏 Support

- Documentation: [docs](./docs/)
- Issues: [GitHub Issues](https://github.com/your-username/lpgenet/issues)
- Discussions: [GitHub Discussions](https://github.com/your-username/lpgenet/discussions)

## ⭐ Star Us

If you like this project, please star it on GitHub!

---

**Built with ❤️ by the Landing Page Generator Team**