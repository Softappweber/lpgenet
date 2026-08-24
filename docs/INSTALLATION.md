# Installation Guide

## Prerequisites

- Node.js 18+
- pnpm 8+
- Git
- GitHub account

## Step 1: Clone Repository

```bash
git clone https://github.com/your-username/lpgenet.git
cd lpgenet
```

## Step 2: Install Dependencies

```bash
pnpm install
```

## Step 3: Environment Setup

Create `.env.local` file:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Step 4: Run Development Server

```bash
pnpm dev
```

Open http://localhost:3000

## Step 5: Build for Production

```bash
pnpm build
```

## Step 6: Deploy to GitHub Pages

1. Enable GitHub Pages in repository settings
2. Push to main branch
3. GitHub Actions will auto-deploy

## Troubleshooting

### Dependencies Issue
```bash
rm -rf node_modules
pnpm install
```

### Build Failed
```bash
pnpm clean
pnpm build
```

### Port Already in Use
```bash
pnpm dev --port 3001
```
