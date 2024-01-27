import { NodeViewWrapper } from '@tiptap/react'

import { NodeName } from '@/types/builder'
import { ViewProps } from '@/types/view'

import { findSection } from '@/utils/section'
import { useBuilder } from '@/store'
import { ActionsBar } from '@/components/editor/views/actions-bar'

export function Roadmap({ deleteNode, node }: ViewProps) {
  const { updateSection, removeSectionFromTableOfContents } = useBuilder((store) => store)
  const nodeName = node.type.name as NodeName
  const section = findSection({ section: nodeName })

  return (
    <NodeViewWrapper className='!m-0 !p-0' as='div'>
      <div className='relative group'>
        <div className='!outline-none' contentEditable={true} suppressContentEditableWarning={true}>
          <h2>{section?.name}</h2>
          <ul className='list-disc list-outside leading-4 tight' data-tight='true'>
            <li>
              <p>
                [X] <strong>Task 1:</strong>Implement feature one.
              </p>
            </li>
            <li>
              <p>
                [&nbsp;&nbsp;] <strong>Task 2:</strong>Implement feature two.
              </p>
            </li>
            <li>
              <p>
                [&nbsp;&nbsp;] <strong>Task 3:</strong>Implement feature three.
              </p>
            </li>
          </ul>
        </div>
        <ActionsBar
          removeSection={() => {
            updateSection(nodeName)
            deleteNode()
            removeSectionFromTableOfContents(nodeName)
          }}
        />
      </div>
    </NodeViewWrapper>
  )
}
