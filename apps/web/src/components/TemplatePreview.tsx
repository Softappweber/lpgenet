'use client'

import { useAppSelector } from '@/lib/store'
import { Card } from '@landing-page-generator/ui'
import { categories } from '@/lib/categories'
import { themes } from '@/lib/themes'
import { sections } from '@/lib/sections'

export function TemplatePreview() {
  const { category, theme, sections: selectedSections } = useAppSelector(
    (state) => state.builder
  )

  const categoryData = categories.find((c) => c.id === category)
  const themeData = themes.find((t) => t.id === theme)

  const previewSections = selectedSections.map(
    (id) => sections.find((s) => s.id === id)
  ).filter(Boolean)

  return (
    <Card className="sticky top-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Live Preview</h3>
            <p className="text-sm text-muted-foreground">
              {categoryData?.name || 'No category selected'}
            </p>
          </div>
          <div
            className="w-6 h-6 rounded-full border"
            style={{ backgroundColor: themeData?.primary || '#000' }}
          />
        </div>
        <div
          className="min-h-[400px] rounded-lg p-4 border"
          style={{
            backgroundColor: themeData?.background || '#ffffff',
            color: themeData?.text || '#000000',
          }}
        >
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h2 className="text-2xl font-bold">
                {categoryData?.name || 'Your Landing Page'}
              </h2>
              <p className="text-muted-foreground">
                {categoryData?.description || 'Premium landing page'}
              </p>
              <button
                className="mt-4 px-4 py-2 rounded-md text-white"
                style={{ backgroundColor: themeData?.accent || '#000' }}
              >
                Get Started
              </button>
            </div>
            {previewSections.map((section) => (
              <div key={section.id} className="p-4 border rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{section.icon}</span>
                  <h3 className="font-semibold">{section.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {section.description || 'Section content goes here'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
