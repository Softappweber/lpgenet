import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BuilderState {
  category: string
  theme: string
  sections: string[]
  template: string
}

const initialState: BuilderState = {
  category: 'real-estate',
  theme: 'premium',
  sections: ['hero', 'features', 'testimonials', 'cta'],
  template: 'modern',
}

const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    },
    setTemplate: (state, action: PayloadAction<string>) => {
      state.template = action.payload
    },
    addSection: (state, action: PayloadAction<string>) => {
      if (!state.sections.includes(action.payload)) {
        state.sections.push(action.payload)
      }
    },
    removeSection: (state, action: PayloadAction<string>) => {
      state.sections = state.sections.filter((id) => id !== action.payload)
    },
    reorderSections: (state, action: PayloadAction<{ startIndex: number; endIndex: number }>) => {
      const [removed] = state.sections.splice(action.payload.startIndex, 1)
      state.sections.splice(action.payload.endIndex, 0, removed)
    },
    resetBuilder: () => initialState,
  },
})

export const {
  setCategory,
  setTheme,
  setTemplate,
  addSection,
  removeSection,
  reorderSections,
  resetBuilder,
} = builderSlice.actions

export default builderSlice.reducer
