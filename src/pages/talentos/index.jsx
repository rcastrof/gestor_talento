import { Fragment, useContext, useReducer, useState } from "react";
import Header from "../../../components/Header";
import TalentosCard from "../../../components/TalentosCard";
import { GestorContext } from "../../../context/GestorContext";
import {HiOutlinePlusCircle} from 'react-icons/hi'
import {HiOutlineAdjustmentsHorizontal} from 'react-icons/hi2'
import Modal from "../../../components/Modal";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTalentos, addTalento } from "../../../lib/helper";
import Link from "next/link";


const formReducer = (state, event) => {
    return{
        ...state,
        [event.target.name]: event.target.value
    }
}

export default function Talentos(){

    const queryClient = useQueryClient()

    const [formData,setFormData] = useReducer(formReducer,{})
    const addMutation = useMutation(addTalento, {
        onSuccess: () => {
        queryClient.prefetchQuery('talentos',getTalentos)
        }
    })
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (Object.keys(formData).length == 0) return console.log("dont have form data")
        let {name, email, salary} = formData
        const model = {
            name,
            avatar: `https://ui-avatars.com/api/portraits/men/${Math.floor(Math.random()*10)}.jpg`,
            email,
            salary
           
        }
        addMutation.mutate(model)
    }
    const [showModal, setShowModal] = useState(false)

    //dentro de data vienen los datos de los talentos
    const {isLoading, isError, data, error} = useQuery('talentos', getTalentos)
    if(isLoading) return <div>Cargando...</div>
    if(isError) return <div>{error.message}</div>

    useContext(GestorContext)
    const {session, handleSignOut} = useContext(GestorContext)
    return(
        <Fragment>
            <div>
                <Header session={session} handleSignOut={handleSignOut}/>
                <div className="h-screen m:bg-white rounded-3xl m-10 ">

                    <div className="p-5">
                        <div className="pb-4 flex flex-col m:items-center m:flex-row  ">
                                <div className=" py-5 flex mb-2 grow border items-center" >
                                    <h1 className=" font-bold text-2xl ">Nuestros talentos</h1>                
                                    <button className="ml-auto text-blue-600 "  ><div className="rounded-full p-2 shadow-2xl mb-2  bg-white" ><HiOutlineAdjustmentsHorizontal size="30px"/></div></button>
                                </div>
                            <button 
                            onClick={() => setShowModal(true)}
                            className="flex ml-2 items-center w-auto m:w-1/3 justify-center p-2  text-blue-700 border border-blue-700 rounded-3xl  font-bold text-xl">
                            <HiOutlinePlusCircle size="26px" />Nuevo talento</button>
                        </div>
                            <div className="m:grid grid-cols-3 flex flex-col  gap-5 p-5 ">
                            {data.map((data) => (
                                <Link key={data._id} data={data} href={`/talentos/${data._id}`}>
                                <TalentosCard key={data._id} data={data}  />
                                </Link>
                                ))} 
                            </div>                                       
                    </div>
                </div>
            </div>
                <Modal isVisible={showModal} onClose={()=>setShowModal(false)}>
                    <div className="p-6">
                        <form 
                        onSubmit={handleSubmit}
                        className="grid lg:grid-cols-2 w-4/6 gap-4">
                            <div className="input-type">
                                <input type="text" name="name" placeholder="Nombre"
                                className="border w-full px-5 py-3 focus:outline-none rounded-md"
                                onChange={setFormData}/>            
                            </div>
                            <div className="input-type">
                                <input type="text" name="email" placeholder="email"
                                className="border w-full px-5 py-3 focus:outline-none rounded-md"
                                onChange={setFormData}/>
                            </div>
                            <div className="input-type">
                                <input type="text" name="salary" placeholder="salary"
                                className="border w-full px-5 py-3 focus:outline-none rounded-md"
                                onChange={setFormData}/>
                            </div>
                            <button 
                            className="flex justify-center text-md w-72 bg-orange-500 text-white px-4 py-2 rounded-3xl">Agregar talento</button>
                        </form>
                    </div>                
                </Modal>
        </Fragment>
    )
}