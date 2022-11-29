import useQuiosco from '../hook/useQuiosco'
import Image from 'next/image'

export default function ProductoPedido({producto}) {
    const { actualizarCantidad, eliminarProducto, setTotal } = useQuiosco()
  return (
    <div className='shadow p-5 mb-3 flex gap-10 items-center'>
        <div className='md:w-1/6'>
            <Image src={`/assets/img/${producto.imagen}.jpg`} width={300} height={400} alt={`imagen de: ${producto.nombre}`} />
        </div>
        <div className='md:w-4/6'>
        <h1 className='font-bold text-3xl'>{producto.nombre}</h1>
        <p className='font-bold text-2xl mt-2 '><select onChange={ e => actualizarCantidad({
                id: producto.id,
                cantidad: +e.target.value
                }) } id='cantidad' >

                <option value={producto.cantidad}>Cantidad: {`${producto.cantidad}`}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              <option value="10">10</option>
        </select></p>
        {setTotal((producto.cantidad * producto.precio).toFixed(2))}
        <p className='font-bold text-2xl mt-2 text-amber-500'>${(producto.cantidad * producto.precio).toFixed(2)}</p>
        </div>
        <div className='md:w-1/6'>
            <button className='p-3 bg-red-600 text-white uppercase font-bold w-full rounded-xl' onClick={ () => {eliminarProducto(id)} }>
                Eliminar
            </button>
        </div>
    </div>
  )
}
