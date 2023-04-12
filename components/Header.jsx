import React, { useContext, useState } from 'react'
import { GestorContext } from '../context/GestorContext'
import { useSession } from 'next-auth/react'
import {HiStar} from 'react-icons/hi'
  

const Header = ({}) => {
  useContext(GestorContext)
  const {data: session} = useSession()

  const {handleSignOut} = useContext(GestorContext)
  const [open, setOpen] = useState(false)

  return (
    <header className='flag text-white border-b rounded-b-3xl h-60'>
      <nav className='flex h-60'>
        <div className='relative w-full bottom-0 right-0 '>
          {/* logo */}
          <div className='p-5 absolute top-5'>
              <HiStar size="70px"  className='absolute opacity-30 top-10 left-16'/>
                <h1 className='relative text-2xl font-semibold top-9'>Gestor</h1>
                  <div className='flex bottom-2'> 
                    <p className='relative top-9 font-semibold'>de</p><h1 className='relative text-2xl font-semibold top-7'>Talentos</h1>             
                  </div>              
            </div>   
          <div className='p-5 absolute bottom-3'>
                       
              <h1 className='font-semibold text-2xl'>Hola, Nombre bloqueado por bug{/* {session.user.email} */}</h1>
              <p>Aqui encontraras todo bla bla bla</p>
          </div>
          <ul className="hidden m:flex absolute end-10 bottom-10 ">
              <li className="mr-6">
                <a className=" hover:text-blue-800" href="#">Perfil</a>
              </li>
              <li className="mr-6">
                <a className=" hover:text-blue-800" href="#">Solicitudes</a>
              </li>
              <li className="mr-6">
                <a className=" hover:text-blue-800" href="/talentos">Talentos</a>
              </li>
              <li className="mr-6">
                <a className=" hover:text-blue-800" href="#">Lista negra</a>
              </li>
              <li className="mr-6">
              <button onClick={handleSignOut}>Cerrar sesion</button>
              </li>
          </ul>
          {/* fondo trasparente */}
          <div 
          onClick={() => setOpen(!open)}
          className={`${!open && "hidden"}
              bg-gray-600/50 min-h-screen w-full fixed top-0 right-0 backdrop-blur-sm`}>
          </div>
          {/* burgermenu */}
          <button
          onClick={() => setOpen(!open)} 
          className='block absolute top-14 right-7  bg-white  m:hidden py-3 px-3 rounded-full focus:outline-none hover:bg-gray-200' >
            <div className='w-2 h-1 rounded-full bg-blue-500 mb-1'></div>
            <div className='w-5 h-1 rounded-full bg-blue-500 mb-1'></div>
            <div className='w-4 h-1 rounded-full bg-blue-500 '></div>
          </button>          
          {/* menu */}
          <div 
          className={`${open ? "w-60" : "w-0"} flag rounded-r-3xl min-h-screen fixed top-0 left-0 transition-all duration-300 `}>
            {/* logo */}
              <div className= {`${!open && "hidden"} absolute p-5 w-full top-10`}>
                <HiStar size="70px"  className='absolute opacity-30 top-10 left-16'/>
                  <h1 className='relative text-2xl font-semibold top-9'>Gestor</h1>
                  <div className='flex bottom-2'> 
                    <p className='relative top-9 font-semibold'>de</p><h1 className='relative text-2xl font-semibold top-7'>Talentos</h1>             
                  </div>              
              </div>
                <div className='mt-40'>
              <ul 
              className={`${!open && "hidden"} flex flex-col items-center w-full text-base cursor-pointer pt-10`}>
                <li className='relative hover:bg-gray-200 hover:bg-opacity-50 w-full flex pl-3.5' >
                  <span className=' absolute rounded-full bg-gray-100 opacity-50 w-6 h-6 m-2 bottom-2 '></span>
                  <a className="relative left-4 hover:text-blue-800 w-full h-full py-4 px-6 " href="#">Perfil</a>
                </li>
                <li className='relative hover:bg-gray-200 hover:bg-opacity-50 w-full flex pl-3.5' >
                  <span className=' absolute rounded-full bg-gray-100 opacity-50 w-6 h-6 m-2 bottom-2 '></span>
                  <a className="relative left-4 hover:text-blue-800 w-full h-full py-4 px-6 " href="#">Solicitudes</a>
                </li>              
                <li className='relative hover:bg-gray-200 hover:bg-opacity-50 w-full flex pl-3.5' >
                  <span className=' absolute rounded-full bg-gray-100 opacity-50 w-6 h-6 m-2 bottom-2 '></span>
                  <a className="relative left-4 hover:text-blue-800 w-full h-full py-4 px-6 " href="/talentos">Talentos</a>
                </li>    
                <li className='relative hover:bg-gray-200 hover:bg-opacity-50 w-full flex pl-3.5' >
                  <span className=' absolute rounded-full bg-gray-100 opacity-50 w-6 h-6 m-2 bottom-2 '></span>
                  <a className="relative left-4 hover:text-blue-800 w-full h-full py-4 px-6 " href="#">Lista negra</a>
                </li>    
                <li className="relative hover:bg-gray-200 hover:bg-opacity-50 w-full flex pl-3.5 top-72">
                  <span className=' absolute rounded-full bg-gray-100 opacity-50 w-6 h-6 m-2 bottom-2 '></span>
                  <a className='relative left-4 w-full h-full py-4 px-6' onClick={handleSignOut}>Cerrar sesion</a>
                </li>
              </ul>
                </div>  
          </div>
        </div>
      </nav>        
    </header>
    
  )
}

export default Header