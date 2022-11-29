import useQuiosco from '../hook/useQuiosco'
import Image from "next/image"

export default function Producto({producto}) {
    const {nombre, precio, imagen} = producto
    const { setProductoActual, setModal} = useQuiosco()
    
    function handleClick(){
      setProductoActual(producto)
      setModal(true)
    }
  return (
    <div className="border p-3 cursor-pointer" onClick={ handleClick }>
        <Image width={300} height={400} src={`/assets/img/${imagen}.jpg`} alt={`imagen de ${nombre}`} />
        <div className="p-5">
            <h3 className="text-2xl">{nombre}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">${precio}</p>
        </div>
        <button type="button" 
        className="bg-emerald-600 hover:bg-green-500 p-3 rounded-lg 
        text-white uppercase w-full mt-5 font-bold" >Agregar Producto</button>
        
    </div>
  )
}
