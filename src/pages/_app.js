import '@/styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import { GestorContextProvider } from '../../context/GestorContext'
import { QueryClientProvider, QueryClient } from 'react-query'


const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (

    
    <SessionProvider session={pageProps.session}>
      <GestorContextProvider>
        <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        </QueryClientProvider>
      </GestorContextProvider>
    </SessionProvider>)
  }
  