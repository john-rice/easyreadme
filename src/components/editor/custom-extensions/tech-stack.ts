import { Node, mergeAttributes } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'
import { NodeName } from '@/types'
import { TechStack } from '@/components/editor/components/tech-stack'

export default Node.create({
  name: NodeName.TECH_STACK,
  group: 'block',
  atom: true,
  draggable: true,
  parseHTML() {
    return [
      {
        tag: 'TechStack'
      }
    ]
  },
  addAttributes() {
    return {
      endPos: {
        default: 0
      },
      content: {
        default: []
      }
    }
  },
  addCommands(): any {
    return {
      insertTechStack:
        ({ endPos, content }: { endPos: number; content: string }) =>
        ({ editor }: any) => {
          return editor
            .chain()
            .insertContentAt(endPos, {
              type: NodeName.TECH_STACK,
              attrs: { content }
            })
            .focus('end')
            .run()
        }
    }
  },
  renderHTML({ HTMLAttributes }) {
    return ['TechStack', mergeAttributes(HTMLAttributes)]
  },
  addNodeView() {
    return ReactNodeViewRenderer(TechStack)
  }
})
