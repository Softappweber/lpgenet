import { useAppSelector, useAppDispatch } from '@/lib/store'
import { setCategory } from '@/lib/store/slices/builderSlice'

export function useCategory() {
  const dispatch = useAppDispatch()
  const category = useAppSelector((state) => state.builder.category)

  return {
    category,
    setCategory: (id: string) => dispatch(setCategory(id)),
  }
}
