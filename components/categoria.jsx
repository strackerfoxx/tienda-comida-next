import useQuiosco from "../hook/useQuiosco"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Categoria({categoria}) {
  const { categoriaActual, setCategoriaActual } = useQuiosco()
  const {icono, nombre, id} = categoria
  const router = useRouter()

  return (
    <div onClick={ () => setCategoriaActual(categoria)} className={`flex items-center w-full border p-5 cursor-pointer
    ${categoriaActual?.id === id ?'bg-amber-400 hover:bg-yellow-200' : 'hover:bg-amber-400' } transition-all`}>
      
      <Image width={70} height={70} src={`/assets/img/icono_${icono}.svg`} 
      alt={`Icono de la categoria de: ${icono}`} className="mr-5"/>
      <button type="button" className="text-2xl font-bold hover:cursor-pointer" 
      onClick={ () => {setCategoriaActual(categoria), router.push('/')} } >
        {nombre}
      </button>
    </div>
  )
}