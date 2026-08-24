'use client'

import { themes } from '@/lib/themes'
import { useAppDispatch, useAppSelector } from '@/lib/store'
import { setTheme } from '@/lib/store/slices/builderSlice'
import { Card } from '@landing-page-generator/ui'

export function ThemeSelector() {
  const dispatch = useAppDispatch()
  const selectedTheme = useAppSelector((state) => state.builder.theme)

  return (
    <Card>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Select Theme</h3>
          <p className="text-sm text-muted-foreground">
            Choose from {themes.length} themes
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {themes.map((theme) => (
            <button
              key={theme.id}
              className={`p-3 text-left border rounded-md transition-colors ${
                selectedTheme === theme.id
                  ? 'border-primary bg-primary/5'
                  : 'hover:bg-muted'
              }`}
              onClick={() => dispatch(setTheme(theme.id))}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full border"
                  style={{ backgroundColor: theme.primary }}
                />
                <div>
                  <div className="font-medium text-sm">{theme.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {theme.category}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Card>
  )
}
