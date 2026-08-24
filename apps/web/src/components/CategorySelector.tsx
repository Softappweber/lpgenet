'use client'

import { useState } from 'react'
import { categories } from '@/lib/categories'
import { useAppDispatch, useAppSelector } from '@/lib/store'
import { setCategory } from '@/lib/store/slices/builderSlice'
import { Card } from '@landing-page-generator/ui'

interface CategorySelectorProps {
  className?: string
}

export function CategorySelector({ className }: CategorySelectorProps) {
  const dispatch = useAppDispatch()
  const selectedCategory = useAppSelector((state) => state.builder.category)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Card className={className}>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Select Category</h3>
          <p className="text-sm text-muted-foreground">
            Choose from {categories.length} categories
          </p>
        </div>
        <input
          type="text"
          placeholder="Search categories..."
          className="w-full px-3 py-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
          {filteredCategories.map((cat) => (
            <button
              key={cat.id}
              className={`p-3 text-left border rounded-md transition-colors ${
                selectedCategory === cat.id
                  ? 'border-primary bg-primary/5'
                  : 'hover:bg-muted'
              }`}
              onClick={() => dispatch(setCategory(cat.id))}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{cat.icon}</span>
                <div>
                  <div className="font-medium text-sm">{cat.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {cat.templates} templates
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
