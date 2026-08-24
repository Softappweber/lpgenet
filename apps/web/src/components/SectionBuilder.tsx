'use client'

import { useState } from 'react'
import { sections } from '@/lib/sections'
import { useAppDispatch, useAppSelector } from '@/lib/store'
import { addSection, removeSection, reorderSections } from '@/lib/store/slices/builderSlice'
import { Card } from '@landing-page-generator/ui'
import { GripVertical, X } from 'lucide-react'

export function SectionBuilder() {
  const dispatch = useAppDispatch()
  const selectedSections = useAppSelector((state) => state.builder.sections)
  const [dragIndex, setDragIndex] = useState<number | null>(null)

  const availableSections = sections.filter(
    (s) => !selectedSections.includes(s.id)
  )

  return (
    <Card>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Page Sections</h3>
          <p className="text-sm text-muted-foreground">
            Add or remove sections from your page
          </p>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium">Selected Sections ({selectedSections.length})</div>
          {selectedSections.length === 0 ? (
            <p className="text-sm text-muted-foreground">No sections selected</p>
          ) : (
            <div className="space-y-1">
              {selectedSections.map((sectionId) => {
                const section = sections.find((s) => s.id === sectionId)
                if (!section) return null
                return (
                  <div
                    key={section.id}
                    className="flex items-center gap-2 p-2 border rounded-md bg-muted/50"
                  >
                    <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab" />
                    <span className="flex-1 text-sm">
                      <span className="mr-2">{section.icon}</span>
                      {section.name}
                    </span>
                    <button
                      className="p-1 hover:bg-destructive/10 rounded"
                      onClick={() => dispatch(removeSection(section.id))}
                    >
                      <X className="w-4 h-4 text-destructive" />
                    </button>
                  </div>
                )
              })}
            </div>
          )}
        </div>
        <div className="space-y-2">
          <div className="text-sm font-medium">Available Sections</div>
          <div className="flex flex-wrap gap-1">
            {availableSections.map((section) => (
              <button
                key={section.id}
                className="px-3 py-1 text-sm border rounded-md hover:bg-muted transition-colors"
                onClick={() => dispatch(addSection(section.id))}
              >
                <span className="mr-1">{section.icon}</span>
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
