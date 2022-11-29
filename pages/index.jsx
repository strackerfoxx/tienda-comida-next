import Layout from "./layout/layout"
import useQuiosco from "../hook/useQuiosco"
import Producto from "../components/Producto"

export default function Home() {
  const { categoriaActual } = useQuiosco()
  return (
    <Layout>
      <h1 className="text-4xl font-extrabold" >{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">
          Elige y personaliza tu  pedido a continuacion
      </p>
      <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {categoriaActual?.productos?.map( producto => (
              <Producto key={producto.id} producto={producto} />
          ))}
      </div>
    </Layout>
  )
}