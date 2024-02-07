import React from 'react'
import Nav from "../components/Nav/Nav";


function page() {
  return (
    <div>
      <Nav />
      <h1>Home</h1>
      <section className="py-20 text-center">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
          <h2 className="text-2xl font-semibold md:text-3xl">Liste patient avec rendez-vous</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm">Ici tu trouve la la liste de tous les patient avec deja un rendez-vous</p>

          {/* <!-- Grid 2 begins --> */}
          <div className="mt-12 grid grid-auto-fit-lg gap-8">

            <div className="grid2-item bg-orange-100 flex flex-row pl-56 pt-4 pb-4">
              <div className='flex flex-col'>
                <h3>Khadim Cisse</h3>
                <p>Date : 01/01/2024</p>
              </div>
              <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-5'>Edit rdv</button>
            </div>
            {/* 
         Coleleur à utiliser ppour les autre tableau 
         bg-cyan-100
         bg-purple-100
         bg-sky-100
         bg-red-100
         bg-green-100 
         */}


          </div>
          {/* <!-- Grid 2 ends --> */}
        </div>
      </section>
    </div>
  )
}

export default page