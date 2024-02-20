'use client'

import { LIST_TEMPLATES } from '@/templates'
import { getRandomElements } from '@/utils'

import { Template } from '@/types/readme'

import { cn } from '@/lib/utils'
import { useBuilder } from '@/store'
import { useReadme } from '@/hooks/use-readme'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'

type TemplateItemProps = {
  template: Template
  buildTemplate: ({ template }: { template: string }) => Promise<void>
}

export function TemplateItem({ template, buildTemplate }: TemplateItemProps) {
  const { nameTemplate, description, tags } = template
  const templateSelected = useBuilder((state) => state.templateSelected)
  const setTemplateSelected = useBuilder((state) => state.setTemplateSelected)
  const isSelected = templateSelected === nameTemplate

  return (
    <div
      className={cn(
        'w-full rounded-md flex flex-col items-start gap-3 border p-3 text-left transition-all hover:bg-accent cursor-pointer',
        isSelected && 'bg-muted'
      )}
      onClick={async () => {
        setTemplateSelected(nameTemplate)
        await buildTemplate({ template: nameTemplate })
      }}
    >
      <div className='flex items-center'>
        <div className='flex items-center gap-2'>
          <h2 className='font-semibold'>{nameTemplate}</h2>
        </div>
      </div>
      <div className='line-clamp-2 text-sm text-muted-foreground'>{description}</div>
      <div className='flex items-center gap-2 text-xs'>
        {tags.map((tag) => {
          const randomVariant = getRandomElements(['secondary', 'outline', 'default'])!
          return (
            // @ts-ignore
            <Badge key={tag} variant={randomVariant}>
              {tag}
            </Badge>
          )
        })}
      </div>
    </div>
  )
}

export function ListTemplates() {
  const { buildTemplate } = useReadme()
  return (
    <ScrollArea className='md:h-[calc(100vh-128px)]'>
      <div className='flex flex-col gap-3 px-3.5'>
        {LIST_TEMPLATES.map((template: Template) => (
          <TemplateItem
            key={template.nameTemplate}
            template={template}
            buildTemplate={buildTemplate}
          />
        ))}
      </div>
    </ScrollArea>
  )
}
