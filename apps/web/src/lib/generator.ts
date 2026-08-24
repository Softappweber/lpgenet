import { categories } from './categories'
import { themes } from './themes'
import { sections } from './sections'

interface BuilderConfig {
  category: string
  theme: string
  sections: string[]
  template: string
}

export async function generateLandingPage(config: BuilderConfig) {
  const category = categories.find((c) => c.id === config.category)
  const theme = themes.find((t) => t.id === config.theme)
  const sectionData = config.sections.map((id) => sections.find((s) => s.id === id)).filter(Boolean)

  // Generate HTML
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${category?.name || 'Landing Page'} - Premium Landing Page</title>
  <style>
    /* Generated Theme */
    :root {
      --primary: ${theme?.primary || '#0f2027'};
      --accent: ${theme?.accent || '#ffd700'};
      --background: ${theme?.background || '#ffffff'};
      --text: ${theme?.text || '#0f2027'};
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; background: var(--background); color: var(--text); }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .section { padding: 60px 0; border-bottom: 1px solid rgba(0,0,0,0.05); }
    .section:last-child { border-bottom: none; }
    .btn { display: inline-block; padding: 12px 32px; background: var(--accent); color: var(--primary); text-decoration: none; border-radius: 8px; font-weight: 600; transition: opacity 0.2s; }
    .btn:hover { opacity: 0.9; }
    h1 { font-size: 2.5rem; margin-bottom: 1rem; }
    h2 { font-size: 2rem; margin-bottom: 1rem; }
    p { line-height: 1.6; opacity: 0.9; max-width: 600px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; margin-top: 24px; }
    .card { background: rgba(255,255,255,0.05); padding: 24px; border-radius: 12px; border: 1px solid rgba(0,0,0,0.05); }
  </style>
</head>
<body>
  <main>
    <!-- Hero Section -->
    <section class="section" style="background: var(--primary); color: white; min-height: 80vh; display: flex; align-items: center;">
      <div class="container">
        <span style="display: inline-block; background: var(--accent); color: var(--primary); padding: 4px 16px; border-radius: 20px; font-weight: 600; font-size: 0.8rem;">✨ Premium</span>
        <h1 style="color: white; font-size: 3rem; margin-top: 16px;">${category?.name || 'Landing Page'}</h1>
        <p style="font-size: 1.2rem; opacity: 0.9;">${category?.description || 'Create stunning landing pages'}</p>
        <a href="#" class="btn" style="margin-top: 24px;">Get Started</a>
      </div>
    </section>
`

  // Generate sections
  sectionData.forEach((section) => {
    if (!section) return
    html += `
    <section class="section">
      <div class="container">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
          <span style="font-size: 2rem;">${section.icon}</span>
          <div>
            <h2>${section.name}</h2>
            <p style="opacity: 0.7;">${section.description}</p>
          </div>
        </div>
        <div class="grid">
          <div class="card">
            <h3>Feature 1</h3>
            <p>Description of feature 1</p>
          </div>
          <div class="card">
            <h3>Feature 2</h3>
            <p>Description of feature 2</p>
          </div>
          <div class="card">
            <h3>Feature 3</h3>
            <p>Description of feature 3</p>
          </div>
        </div>
      </div>
    </section>
`
  })

  html += `
    <!-- Footer -->
    <section class="section" style="background: var(--primary); color: white; border: none;">
      <div class="container" style="text-align: center;">
        <p style="opacity: 0.7;">&copy; 2024 Landing Page Generator. All rights reserved.</p>
      </div>
    </section>
  </main>
</body>
</html>`

  return {
    html,
    css: '',
    js: ''
  }
}
