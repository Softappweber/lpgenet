'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun, Github } from 'lucide-react'
import { Button } from '@landing-page-generator/ui'

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <h1 className="text-xl font-bold">Landing Page Generator</h1>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
            v2.0
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={18} />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
