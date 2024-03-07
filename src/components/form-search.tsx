'use client'

import { Input } from '@/components/ui/input'
import { GitIc } from '@/components/icons'

type FormSearchProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export function FormSearch({ onSubmit }: FormSearchProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    onSubmit(e)
  }

  return (
    <div className='flex flex-col relative z-10 group'>
      <form className='flex gap-2' onSubmit={handleSubmit}>
        <div className='relative flex w-full sm:w-[500px] items-center border group-focus-within:border-neutral-600 rounded-md bg-neutral-800/60 focus-within:bg-transparent transition-colors duration-200'>
          <div className='flex items-center pointer-events-none absolute inset-y-0 left-0 group-focus-within:left-0 sm:left-[90px] pl-3 sm:pl-0 group-focus-within:pl-3 text-black/50 dark:text-white/40'>
            <GitIc className='w-4 h-4' />
          </div>
          <Input
            type='url'
            autoComplete='off'
            autoCorrect='off'
            autoCapitalize='off'
            required
            name='urlRepository'
            className='w-full h-8 pl-9 border-none focus-visible:outline-none focus-visible:ring-0 sm:placeholder:text-center sm:text-center group-focus-within:placeholder:text-left group-focus-within:text-left group-focus-within:placeholder:text-white/60 placeholder:text-white/40'
            placeholder='https://github.com/xavimondev/easyreadme'
          />
        </div>
      </form>
    </div>
  )
}
