import Head from "next/head";
import {HiOutlineAtSymbol, HiLockClosed, HiEyeOff, HiEye, HiStar} from "react-icons/hi";
import { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import  login_validate  from "../../lib/validate"
import { signIn } from "next-auth/react"



export default function Login() {

    const [showPassword, setShowPassword] = useState(false);

    const router= useRouter()
    const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
    validate : login_validate,

  });

    async function onSubmit(values){
        const status = await signIn('credentials',{
          redirect: false,
          email: values.email,
          password: values.password,
          callbackUrl:"/"
        })
        if (status.ok) router.push(status.url)
        }
        

    return (
        <div className="flex h-screen flag">
            <div className='p-5 absolute top-36 left-52 text-white '>
                <HiStar size="70px"  className='absolute opacity-30 top-10 left-16'/>
                    <h1 className='relative text-2xl font-semibold top-9 right-5'>Gestor</h1>
                    <div className='flex bottom-2'> 
                        <p className='relative top-9 font-semibold'>de</p><h1 className='relative text-2xl font-semibold top-7'>Talentos</h1>             
                    </div>              
                    <div className="relative top-16 right-9 ">
                        <h1 className=" text-2xl font-bold">¡Bienvenid@!</h1>
                    </div>
            </div>
            <div className=" m-auto w-96 h-60 bg-white rounded-3xl ">
                <div className="text-center py-10">         
                    <div className="w-3/4 mx-auto flex flex-col gap-10">
                        <form className="flex flex-col gap-8" onSubmit={formik.handleSubmit}>
                            <div className="flex border-b-2 border-gray-400">
                                <span className="icon flex items-center  text-gray-400 ">
                                    <HiOutlineAtSymbol size="20px"/>
                                </span>
                                <input
                                className="grow pl-2 focus:outline-none"
                                type="email"
                                name="email"
                                placeholder="ejemplo@rycconsultores.com"
                                {...formik.getFieldProps('email')}
                                />
                                
                            </div>

                            <div className="flex border-b-2 border-gray-400">
                                <span className="icon flex items-center text-gray-400 ">
                                    <HiLockClosed size="20px"/>
                                </span>
                                <input
                                className="grow pl-2 focus:outline-none "
                                type={`${showPassword ? "text" : "password"}`}
                                name="password"
                                placeholder="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                />
                                <span className="icon flex items-center text-gray-400 hover:cursor-pointer color " onClick={()=>setShowPassword(!showPassword)}>
                                    {showPassword?<HiEyeOff size="20px"/>:<HiEye size="20px" />}
                                </span>
                            </div>

                            <div className="input-button">
                                <button type="submit" className="flag rounded-3xl text-white w-72 h-11 " >Iniciar sesion</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
            
    )
}