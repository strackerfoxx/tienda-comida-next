import { useState, useEffect } from 'react'
import Image from 'next/image'
import useQuiosco from '../hook/useQuiosco'

export default function ModalProducto() {
    const {setModal, productoActual, agregarPedido, pedido} = useQuiosco()
    const [cantidad, setCantidad] = useState(1)
    const [ready, setReady] = useState(false)

    // este useEffect se activa cuando 1. se activa el modal (cuando se pulsa un producto)
    // 2. se agrega el producto al pedido
    useEffect(() => {
        if(pedido.some( productoState => productoState.id === productoActual.id )){
            const pedidoActualizado = pedido.find(
                (pedidoState) => pedidoState.id === productoActual.id
            )
            setReady(true)
            setCantidad(pedidoActualizado.cantidad)
        }

    }, [productoActual, pedido])
  return (
    <div className='md:flex gap-10 text-center'>
        <div className='md:w-1/3'>
            <Image width={400} height={500} alt={`imagen de ${productoActual.nombre}`} src={`/assets/img/${productoActual.imagen}.jpg`} />
        </div>
        <div className='md:w-2/3'>
            <div className='flex justify-end'>
                <button onClick={ () => setModal(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>
            </div>
            <h1 className='text-4xl font-bold mt-5'>{productoActual.nombre}</h1>

            <div className='flex gap-4 m-5 mb-10 justify-center'> 
                <p className='mt-5 font-bold text-5xl text-amber-500'>${ (productoActual.precio * cantidad).toFixed(2) }</p>
                <div className='flex gap-4 mt-7'>
                    <button onClick={() => { if(cantidad <= 1) return; setCantidad(cantidad - 1) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </button>
                    <p className='text-3xl font-bold'>{cantidad}</p>
                    <button onClick={() => { if(cantidad >= 10) return; setCantidad(cantidad + 1) } }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </button>
                </div>
                </div>
            <button onClick={ () => {agregarPedido({ ...productoActual, cantidad}), setModal(false) }}
            className='bg-emerald-600 hover:bg-green-500 p-5 rounded-lg text-white uppercase w-full font-black text-xl'>
                {ready ? 'Guardar Cambios' : 'Añadir al pedido'}
            </button>          
        </div>
    </div>
  )
}
