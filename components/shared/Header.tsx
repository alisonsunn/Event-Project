import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { MobileNav } from './MobileNav'
import { WebNav } from './WebNav'

export const Header = () => {
  return (
    <header className='flex items-center justify-between wrapper'>
      <div>
        <Link href="/" className='flex items-center gap-2'>
          <img src='/assets/images/event.svg' alt='Evently logo' className='w-14 h-14'></img>
          <h1 className='font-medium text-3xl'>Evently</h1>
        </Link>
      </div>
      <nav className='hidden md:flex'>
        <SignedIn>
          <WebNav></WebNav>
        </SignedIn>
      </nav>
      <div className='flex' >
        <SignedOut>
          <Button asChild className='rounded-2xl mr-2'>
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
        <SignedIn>
          <div className='flex items-center mr-5'>
            <UserButton ></UserButton>
          </div>
        </SignedIn>
        <nav className='flex items-center mr-2 pt-1 sm:hidden '>
          <SignedIn >
            <MobileNav></MobileNav>
          </SignedIn>
        </nav>
      </div>
    </header>
  )
}
