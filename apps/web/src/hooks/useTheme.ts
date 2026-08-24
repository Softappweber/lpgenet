import { useAppSelector, useAppDispatch } from '@/lib/store'
import { setTheme } from '@/lib/store/slices/builderSlice'

export function useTheme() {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.builder.theme)

  return {
    theme,
    setTheme: (id: string) => dispatch(setTheme(id)),
  }
}
