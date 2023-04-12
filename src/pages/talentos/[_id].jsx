
import Header from '../../../components/Header'
import {HiOutlinePencil, HiChevronDown} from 'react-icons/hi'
import { useContext } from 'react'
import { GestorContext } from "../../../context/GestorContext";

export async function getServerSideProps({params}) {
    const res = await fetch(`http://localhost:3000/api/talentos/${params._id}`)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}



const TalentoPerfil = ({data}) => {
    useContext(GestorContext)
    const {session, handleSignOut} = useContext(GestorContext)
  return (
    <div>
        <Header  session={session} handleSignOut={handleSignOut}/>
        <div className='m:bg-white rounded-3xl m-20 h-screen'>
            <div className=' rounded-t-3xl p-3 flex flex-col m:flex-row border-b-8  border-gray-100 '>

                <div className='flex border border-green-700 m:w-1/2'>
                    <div className=' h-full rounded-full'>
                        <img src={data.avatar} className='rounded-full w-32' />
                    </div>
                    <div className='flex flex-col p-5 border w-full'>
                        <h1>Id: {data._id}</h1>
                        <p>nombre: {data.name}</p>
                        <p>email : {data.email}</p>
                        <p>salary: {data.salary}</p>                        
                    </div>                
                    <div>
                    <button className='my-11 bg-gray-300 rounded-full p-2'><HiOutlinePencil size="25px"/></button>
                    </div>
                </div>
                <div className='border  m:w-1/2'>
                    <div className="m:mt-5 flex gap-5 overflow-y-auto scrollbar-hide p-5">
                        <button className='bg-gradient-to-b from-orange-500 to-orange-300 rounded-full px-5 py-2 text-white'>Perfil</button>
                        <button className=' bg-gray-300 rounded-full px-5 py-2 text-gray-800 font-bold'>Asignacion</button>
                        <button className='bg-gray-300  rounded-full px-5 py-2 text-gray-800 font-bold'>Historial</button>
                        <button className='bg-gray-300  rounded-full px-5 py-2 text-gray-800 font-bold'>Comentarios</button>
                    </div> 
                </div>
                
            </div>
            <div className='p-5 flex flex-col gap-5 m:flex-row'>
                {/* Informacion personal */}
                <div className='bg-white rounded-3xl shadow-sm m:w-1/3'>
                    <div 
                    className='relative overflow-hidden cursor-pointer p-1'>
                        <input 
                        type='checkbox'
                        className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer'
                        ></input>
                            <div 
                            className='flex items-center h-12'>
                                <h1 className='font-bold text-xl p-5'>Informacion personal</h1>
                            </div>
                            <div 
                            className='absolute top-3 right-3 text-blue-500 transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                            <HiChevronDown size="25px" />
                            </div>
                            <div 
                            className='overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 '>
                                <div className='text-gray-600 p-5'>
                                    <p>Direccion </p>
                                    <p>Telefono </p>
                                    <p>Email {data.email}</p>
                                    <p>Sueldo</p>
                                </div>
                                

                            </div>
                    </div>
                </div>
                {/* fecha de ingreso  */}
                <div className='bg-white rounded-3xl shadow-sm m:w-1/3'>
                    <div 
                    className='relative overflow-hidden cursor-pointer p-1'>
                        <input 
                        type='checkbox'
                        className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer'
                        ></input>
                            <div 
                            className='flex items-center h-12'>
                                <h1 className='font-bold text-xl p-5'>Fecha de ingreso</h1>
                            </div>
                            <div 
                            className='absolute top-3 right-3 text-blue-500 transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                            <HiChevronDown size="25px" />
                            </div>
                            <div 
                            className='overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 '>
                                <div className='text-gray-600 p-5'>
                                    <p>Direccion </p>
                                    <p>Telefono </p>
                                    <p>Email {data.email}</p>
                                    <p>Sueldo</p>
                                </div>
                                

                            </div>
                    </div>
                </div>
                {/* experiencia y habilidades  */}
                <div className='bg-white rounded-3xl shadow-sm m:w-1/3'>
                    <div 
                    className='relative overflow-hidden cursor-pointer p-1'>
                        <input 
                        type='checkbox'
                        className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer'
                        ></input>
                            <div 
                            className='flex items-center h-12'>
                                <h1 className='font-bold text-xl p-5'>Experiencia y habilidades</h1>
                            </div>
                            <div 
                            className='absolute top-3 right-3 text-blue-500 transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                            <HiChevronDown size="25px" />
                            </div>
                            <div 
                            className='overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 '>
                                <div className='text-gray-600 p-5'>
                                    <p>Direccion </p>
                                    <p>Telefono </p>
                                    <p>Email {data.email}</p>
                                    <p>Sueldo</p>
                                </div>
                                

                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TalentoPerfil