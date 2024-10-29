import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className='flex-col bottom-0 w-full justify-center pb-5'>
        <div>
          <Link href="/" className='flex items-center justify-center gap-2'>
            <img src='/assets/images/event.svg' alt='Evently logo' className='w-14 h-14'></img>
            <h1 className='font-medium text-3xl'>Evently</h1>
          </Link>
        </div>
        <p className='text-center text-sm'>2024 Evently. All Rights Alison Reserved.</p>
      </div>
    </footer>
  )
}
