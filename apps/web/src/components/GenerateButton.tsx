'use client'

import { useState } from 'react'
import { useAppSelector } from '@/lib/store'
import { generateLandingPage } from '@/lib/generator'
import { downloadHTML } from '@/lib/export'
import { Button } from '@landing-page-generator/ui'
import { Download, Sparkles } from 'lucide-react'

export function GenerateButton() {
  const [isGenerating, setIsGenerating] = useState(false)
  const config = useAppSelector((state) => state.builder)

  const handleGenerate = async () => {
    setIsGenerating(true)
    try {
      const result = await generateLandingPage(config)
      downloadHTML(result)
    } catch (error) {
      console.error('Generation failed:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="flex gap-2">
      <Button
        className="flex-1"
        onClick={handleGenerate}
        disabled={isGenerating}
      >
        <Sparkles className="w-4 h-4 mr-2" />
        {isGenerating ? 'Generating...' : 'Generate Landing Page'}
      </Button>
      <Button variant="outline" size="icon">
        <Download className="w-4 h-4" />
      </Button>
    </div>
  )
}
