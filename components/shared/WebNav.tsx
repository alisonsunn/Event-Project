import React from 'react'
import { headerLinks } from '../../app/data/data'

export const WebNav = () => {
  return (
    <ul className='flex flex-col gap-5 items-start p-20 pl-5 sm:flex-row sm:p-0 sm:gap-[10rem]'>
      {headerLinks.map((each) => (
        <li key={each.label}>{each.label}</li>
      ))}
    </ul>
  )
}
