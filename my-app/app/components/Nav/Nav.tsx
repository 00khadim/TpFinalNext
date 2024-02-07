'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'

function Nav() {
    

  return (
    <div className=" w-[100%]">
        <div className='header flex justify-between m-auto py-[15px] bg-[#002e32] text-white	'>
            <div className='logo pl-6'>
                <h2>DoctoRendez-Vous</h2>
            </div>
            <div className='menu'>
                <nav>
                    <ul className='flex gap-[20px] mr-20'>
                        <li>
                            <Link href='../../Home'>Home</Link>
                        </li>
                        <li>
                            <Link href='../../Patients'>Patients</Link>
                        </li>  
                         <li>
                            <Link href=''>Contact</Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>


        </div>
    </div>
  )
}
import { useState } from 'react'

export default Nav