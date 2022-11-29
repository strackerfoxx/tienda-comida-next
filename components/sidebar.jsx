import useQuiosco from "../hook/useQuiosco"
import Categoria from "./categoria"
import Image from "next/image"

export default function Sidebar() {
  const { categorias } = useQuiosco()
  return (
    <>
        
        <Image width={150} height={80} src='/assets/img/logo.svg' alt="Logo de la pagina" className="ml-16"/>
        <nav>
          {categorias.map( categoria => (
            <Categoria key={categoria.id} categoria={categoria}/>
          ))}
        </nav>
    </>
  )
}
