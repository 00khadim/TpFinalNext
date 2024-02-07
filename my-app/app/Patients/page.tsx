'use client'
import React, { useState } from 'react'
import Nav from "../components/Nav/Nav";
// import Definition, { Patient } from "../lib/definition"



function page() {
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [date, setDate] = useState("")
  const [tabPatient, setTabPatient] = useState<Array<{ nom: string, prenom: string, date: string }>>([]);

  const handleChangeNom = (event : string) =>{
    setNom (event)
  }
  const handleChangePrenom = (event : string) =>{
    setPrenom  (event)
  }

  const addPatient = () => {
    const newPatient = { nom, prenom, date };
    setTabPatient([...tabPatient, newPatient]);
    // Réinitialise les champs après l'ajout du patient
    setNom("");
    setPrenom("");
    setDate("");
  };
  
  return (
    <div>
      <Nav />
      <h1 className='p-15'>Appointments</h1>
      <div className='bg-[#ecf7f5] p-[30px] m-[20px]'>
        <label >Ajouter un patient</label>
        <div className='flex justify-between w-auto'>
          
          <input type="text"
          value={nom}
          placeholder='Nom' 
          id="name" 
          onChange={event => handleChangeNom(event.target.value)} 
          className='border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5' 
         
          />
          <input type="text" 
          value={prenom}
          placeholder='Prenom patient' 
          id="firstname"
          onChange={event => handleChangePrenom(event.target.value)} 
          className='border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5' 
           />
          <input value={date}
          type="text"
          placeholder='date rdv'
          id="date_rdv" 
          className="w-[135px]" 
          onChange={(event) => setDate(event.target.value)}
          />
           <button onClick={addPatient} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Ajouter</button>
        </div>

        <h3 className='pt-5 font-bold	'>Patients waitings</h3>
        <ul>
        {tabPatient.map((patient, index) => (
            <li key={index}>
              {patient.nom} {patient.prenom} - {patient.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default page