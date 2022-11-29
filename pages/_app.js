import { QioscoProvider } from '../context/QuioscoProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <QioscoProvider>
        <Component {...pageProps} />
    </QioscoProvider>
  )
}

export default MyApp
