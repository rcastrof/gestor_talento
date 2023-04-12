import Head from "next/head"
import Header from "../../components/Header"
import SolicitudesCard from "../../components/SolicitudesCard"
import TalentosCard from "../../components/TalentosCard"
import { useContext } from "react"
import { GestorContext } from "../../context/GestorContext"
import { getSession } from "next-auth/react"
import { useQuery } from "react-query"
import { getTalentos } from "../../lib/helper"
import Link from "next/link";
import {HiChevronRight} from 'react-icons/hi'

export default function Home() {

  useContext(GestorContext)
  const {session,handleSignOut} = useContext(GestorContext)
  
  return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
        {session ? AutorizedUser({session,handleSignOut}) : Guest()}
      </div>
      
  )
}

function Guest(){
  return(
    <main>
      <h1>Guest</h1>
    </main>
  )
}

function AutorizedUser({session,handleSignOut}){

  const {isLoading, isError, data, error} = useQuery('talentos', getTalentos)
    if(isLoading) return <div>Cargando...</div>
    if(isError) return <div>{error.message}</div>

  return(
    <div>
      <Header session={session} handleSignOut={handleSignOut}/>
      <div className="h-screen m:bg-white rounded-3xl m-10 p-5 ">
        <div className="">
          <h1 className="font-bold text-xl">Solicitudes</h1>
          <SolicitudesCard/>
        </div>
        
        <div className="mt-10">
          <div className="flex relative">
            <h1 className=" font-bold text-xl">Talentos</h1>
            <button className=" text-sm ml-5 p-1 px-2 bg-blue-600 text-white rounded-full ">Mas recientes</button>
            <a href="/talentos" className="absolute flex right-5 text-blue-600 font-semibold">Ver todos <div className="bg-blue-600 px-1 py-1 rounded-full ml-2" ><HiChevronRight className="text-white"/></div></a>
          </div>
        <div className="flex mt-5 gap-5 overflow-y-auto scrollbar-hide p-5">
          {data.map((data) => (
              <Link key={data._id} data={data} href={`/talentos/${data._id}`}>
              <TalentosCard key={data._id} data={data}  />
              </Link>
              ))} 
          </div> 
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({req}) {
  const session = await getSession({req})

  if(!session){
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}
