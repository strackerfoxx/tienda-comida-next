import Layout from "./layout/layout"
import useQuiosco from "../hook/useQuiosco"
import ProductoPedido from "../components/ProductoPedido"

export default function Resumen() {
  const { pedido } = useQuiosco()
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">Resumen</h1>
        <p className="text-2xl my-10">Revisa tu pedido</p>
      </div>
        {pedido.map( producto => (
          <ProductoPedido key={producto.id} producto={producto} />
        )
        )}
    </Layout>
  )
}
