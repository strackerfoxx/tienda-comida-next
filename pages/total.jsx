import useQuiosco from "../hook/useQuiosco";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "./layout/layout"
import Alerta from "../components/Alerta";

export default function Total() {
  const { total, crearPedido, pedido, setNombre, nombre } = useQuiosco()
  const [error, setError]  = useState(false)
  const router = useRouter()

  function handleSubmit(e){
    e.preventDefault();
    if(!nombre || pedido.length < 1){
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 1300);
      return
    }
    crearPedido({...pedido, nombre, total})
    window.location.href = '/'
  }
  return (
    <Layout>
        <div className="text-center">
          <h1 className="text-4xl m-3 font-extrabold">Total y Confirmar Pedido</h1>
        
        <form onSubmit={handleSubmit} >
            <p className="text-2xl">Total a pagar: <span className="font-bold">{total ? `$${total}` : 'no hay contenido en el pedido'}</span></p>
            {error && (
              <Alerta/>
            )}
            <label htmlFor="nombre" value='pene' className="text-2xl py-4 font-bold uppercase block"> Nombre </label>
            <input type="text" className="bg-gray-300 w-full lg:w-3/4 p-3 rounded-xl" onChange={ e => setNombre(e.target.value)} /> 
            <input type="submit" value='confirmar pedido'
            className="uppercase bg-emerald-500 text-white p-3 my-8 text-xl font-bold rounded-xl w-full lg:w-3/4 cursor-pointer"/>
        </form>
        </div>
    </Layout>
  )
}
