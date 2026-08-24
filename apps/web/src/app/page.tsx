import { CategorySelector } from '@/components/CategorySelector'
import { TemplatePreview } from '@/components/TemplatePreview'
import { GenerateButton } from '@/components/GenerateButton'
import { ThemeSelector } from '@/components/ThemeSelector'
import { SectionBuilder } from '@/components/SectionBuilder'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <CategorySelector />
            <ThemeSelector />
            <SectionBuilder />
            <GenerateButton />
          </div>
          <div className="lg:sticky lg:top-8 h-fit">
            <TemplatePreview />
          </div>
        </div>
      </div>
    </main>
  )
}
