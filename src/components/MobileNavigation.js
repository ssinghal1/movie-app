import React from 'react'
import { mobleNavigation } from '../contents/navigation'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-16 bg-black bg-opacity-70 backdrop-blur-2xl fixed bottom-0 w-full z-40'> 
        <div className='flex items-center justify-between h-full text-neutral-400'>
          {
            mobleNavigation.map((nav,index)=>{
              return(
                <NavLink
                      key={nav.label+ "mobleNavigation"}
                      to={nav.href}
                      className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white" } `}
                >
                  <div className='text-2xl'>
                    {nav.icons}
                  </div>
                  <p className='text-sm'>
                    {nav.label}
                  </p>
                </NavLink>
              )
            })
          }

        </div>
    </section>
  )
}

export default MobileNavigation