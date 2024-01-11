import { create } from 'zustand'
import { NameTemplate, SectionKey, SectionState } from '@/types'
import { DEFAULT_CONTENT, README_SECTIONS_DATA } from '@/constants'

const INITIAL_STATE_SECTIONS: SectionState[] = README_SECTIONS_DATA.map((section) => {
  return {
    ...section,
    added: false
  }
})

type BuilderState = {
  templateSelected: NameTemplate
  setTemplateSelected: (templateName: NameTemplate) => void
  contentTemplate: string
  addContentToTemplate: (content: string) => void
  setContentTemplate: (content: string) => void
  clearContentTemplate: () => void
  isGenerating: boolean
  setIsGenerating: (isGenerating: boolean) => void
  listSections: SectionState[]
  updateSection: (section: SectionKey) => void
}

export const useBuilder = create<BuilderState>()((set) => ({
  templateSelected: 'Minimal',
  contentTemplate: DEFAULT_CONTENT,
  isGenerating: false,
  listSections: INITIAL_STATE_SECTIONS,
  setTemplateSelected: (templateName: NameTemplate) => set({ templateSelected: templateName }),
  addContentToTemplate: (content: string) =>
    set((prevContent) => ({ contentTemplate: prevContent.contentTemplate.concat(content) })),
  setContentTemplate: (content: string) => set({ contentTemplate: content }),
  clearContentTemplate: () => set({ contentTemplate: '' }),
  setIsGenerating: (isGenerating) => set({ isGenerating }),
  updateSection: (section: SectionKey) => {
    set((prevSections) => ({
      listSections: prevSections.listSections.map((s) =>
        s.id === section ? { ...s, added: !s.added } : s
      )
    }))
  }
}))
