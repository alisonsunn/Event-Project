import React from 'react'
import { FaAlignRight } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { WebNav } from './WebNav';


export const MobileNav = () => {
  return (
    <nav>
      <Sheet>
        <SheetTrigger>
          <FaAlignRight></FaAlignRight>
        </SheetTrigger>
        <SheetContent className='bg-slate-50'>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <WebNav></WebNav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
