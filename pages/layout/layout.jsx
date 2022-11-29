import Modal from 'react-modal'
import useQuiosco from "../../hook/useQuiosco"
import Sidebar from "../../components/sidebar"
import ModalProducto from '../../components/modalProducto';
import Pasos from '../../components/pasos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    border: '1px solid #f0f0f0',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#__next');

export default function Layout({children}) {
  const {modal, toastIf} = useQuiosco()
  return (
    <>
    <div className="md:flex">
      <aside className='md:w-4/12 xl:w-1/4 2xl:1/5'>
        <Sidebar/>
      </aside>
          <main className='md:w-8/12 xl:w-3/4 2xl:4/5 h-screen overflow-y-scroll'>
              <div className="p-10">
                <Pasos  />
                {children}
              </div>
          </main>
    </div>
    {modal && ( 
      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto/>
      </Modal> 
      )}
      <ToastContainer />
    </>
  )
}
