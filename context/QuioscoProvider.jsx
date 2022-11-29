import axios from "axios";
import { createContext, useState,  useEffect } from "react";
import { toast } from 'react-toastify';

const QuioscoContext = createContext()

function QioscoProvider({children}){
    const [categorias, setCategorias] = useState([])
    const [pedido, setPedido] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [productoActual, setProductoActual] = useState({})
    const [modal, setModal] = useState(false)
    const [paso, setPaso] = useState(1)
    const [total, setTotal] = useState(0)
    const [nombre, setNombre] = useState('')


    useEffect(() => {
        async function getCategorias(){
            const respuesta = await fetch('/api/categorias')
            const resultado = await respuesta.json()
            setCategorias(resultado)
        }
        getCategorias()
    }, [])
    useEffect(() => {
      setCategoriaActual(categorias[2])
    }, [categorias])

    function agregarPedido(producto){
        if(pedido.some( productoState => productoState.id === producto.id )){
            const pedidoActualizado = pedido.map( productoState => {
                if( productoState.id === producto.id ) {
                    productoState.cantidad = producto.cantidad;
                }
                return productoState
            })
            setPedido([...pedidoActualizado])
            toast.success('Actualizado Correctamente')
        }else{
            setPedido([...pedido, producto])
            toast.success('Añadido Correctamente')
        }
    }

    const eliminarProducto = id => {
        const pedidoActualizado = pedido.filter( producto => producto.id != id)
        setPedido(pedidoActualizado)
        window.localStorage.setItem('pedido', JSON.stringify( pedido ));
    }
    
    const actualizarCantidad = producto => {
      const pedidoActualizado = pedido.map( productoActual => {
        if(productoActual.id === producto.id ) {
          productoActual.cantidad = parseInt( producto.cantidad )
        } 
        return productoActual
      })
      setPedido(pedidoActualizado)
      window.localStorage.setItem('pedido', JSON.stringify( pedido ));
    }

    useEffect(() => {
      const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0); 
      const totalProcesado = nuevoTotal.toFixed(2)
      setTotal(nuevoTotal)
    }, [pedido])
    

    async function crearPedido(pedido){
        try {
            const {data} = await axios.post('/api/ordenes', {pedido, nombre, total, fecha: Date.now().toString()})
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <QuioscoContext.Provider value={{
            categorias, 
            categoriaActual, setCategoriaActual,
            productoActual, setProductoActual,
            modal, setModal,
            agregarPedido,
            pedido,
            paso, setPaso,
            eliminarProducto,
            actualizarCantidad,
            total, setTotal,
            crearPedido,
            setNombre, nombre
            }}>
            {children}
        </QuioscoContext.Provider>
    )
}
export {
    QioscoProvider
}
export default  QuioscoContext