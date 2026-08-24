export function downloadHTML(result: { html: string; css: string; js: string }) {
  const blob = new Blob([result.html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'landing-page.html'
  a.click()
  URL.revokeObjectURL(url)
}

export function downloadCSS(result: { css: string }) {
  const blob = new Blob([result.css], { type: 'text/css' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'styles.css'
  a.click()
  URL.revokeObjectURL(url)
}
