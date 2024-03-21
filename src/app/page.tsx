import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Hero } from '@/components/hero'
import { GitHubOctopusIc } from '@/components/icons'
import { ListFeatures } from '@/components/list-features'
import { ModeToggle } from '@/components/mode-toggle'

import { nunitoSans } from './fonts'

export default function Home() {
  return (
    <>
      <div className='absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(#e5e7eb_-4px,transparent_1px)] [background-size:18px_18px]'></div>
      <div className='h-screen flex flex-col max-w-4xl lg:max-w-7xl 2xl:max-w-[96rem] mx-auto'>
        <header className='sticky top-0 px-8 xl:px-20'>
          <div className='flex h-14 items-center justify-between'>
            <div className='flex items-center cursor-pointer text-white'>
              <Link className='flex ' href='/'>
                <Image src='/logo.png' alt='Application logo' width={30} height={30} />
                <h1 className='text-base sm:text-xl ml-2 hover:text-violet-200 transition-colors duration-300'>
                  easyreadme
                </h1>
              </Link>
            </div>
            <div className='flex gap-2 items-center'>
              <Link
                aria-label='View app repository on GitHub'
                href='https://github.com/xavimondev/readme-creator'
                target='_blank'
                rel='noreferrer'
                className='rounded-md p-2.5 hover:bg-accent transition-colors ease-out'
              >
                <GitHubOctopusIc className='size-5 text-black dark:text-white' />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </header>
        <main className={cn(nunitoSans.className, 'flex items-center flex-grow px-8 xl:px-20')}>
          <section className='w-full flex flex-col lg:flex-row gap-0 lg:gap-4'>
            <Hero />
            <ListFeatures />
          </section>
        </main>

        <footer className='w-full flex items-center justify-center'>
          <div className='text-center py-4 sm:py-3.5 px-6'>
            <span className='text-gray-500 dark:text-white/80 text-base sm:text-lg'>
              Built by
              <a
                href='https://twitter.com/xavimonp'
                rel='noopener'
                target='_blank'
                className='underline underline-offset-4'
              >
                {' '}
                xavimon
              </a>
            </span>
          </div>
        </footer>
      </div>
      <div className='absolute border-t border-gray-400 border-opacity-50 dark:border-opacity-20 bottom-14 w-full h-0.5'></div>
    </>
  )
}
