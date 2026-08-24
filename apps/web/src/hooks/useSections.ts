import { useAppSelector, useAppDispatch } from '@/lib/store'
import { addSection, removeSection, reorderSections } from '@/lib/store/slices/builderSlice'

export function useSections() {
  const dispatch = useAppDispatch()
  const sections = useAppSelector((state) => state.builder.sections)

  return {
    sections,
    addSection: (id: string) => dispatch(addSection(id)),
    removeSection: (id: string) => dispatch(removeSection(id)),
    reorderSections: (startIndex: number, endIndex: number) =>
      dispatch(reorderSections({ startIndex, endIndex })),
  }
}
