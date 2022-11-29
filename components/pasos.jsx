import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useQuiosco from '../hook/useQuiosco'
const pasos  = [
    {paso: 1, nombre: 'Menú', url: '/'},
    {paso: 2, nombre: 'Resumen', url: '/resumen'},
    {paso: 3, nombre: 'Datos y Total', url: '/total'}
]

export default function Pasos() {
    const {setPaso} = useQuiosco()
    const router = useRouter()

    function getRuta(){
        switch(router.pathname){
            case '/': return 1;
            case '/resumen': return 2;
            case '/total': return 3;
        }
    }

    return (
    <>
    <div className="flex justify-between mt-3 mb-7">
        {pasos.map( paso => (
            <button className="text-2xl font-bold " key={paso.paso} onClick={() => {router.push(paso.url), setPaso(paso.paso)}}>
                {paso.nombre}
            </button>
        ))}
    </div>
    
    <div className='bg-gray100 mb-10'>
        <div className={`rounded-full uppercase bg-amber-500 text-xs leading-none h-2 text-center text-white w-${getRuta()}/3`}>
        </div>
    </div>
    </>
  )
}
