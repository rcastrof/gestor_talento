export default function login_validate(values){
    const errors = {}

    if(!values.email){
        errors.email = "El email es requerido"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if(!values.password){
        errors.password = "El password es requerido"
    }else if(values.password.length < 8 || values.password.length > 20){
        errors.password = "El password debe tener entre 8 y 20 caracteres"
    }else if (values.password.includes(" ")){
        errors.password = "El password no puede contener espacios"
    }
    return errors

}

export function registerValidate(values){
    const errors = {}

    if(!values.username){
        errors.username = "El usuario es requerido"
    }else if(values.username.length < 4 || values.username.length > 20){
        errors.username = "El usuario debe tener entre 4 y 20 caracteres"
    }else if (values.username.includes(" ")){
        errors.username = "El usuario no puede contener espacios"
    }

    if(!values.email){
        errors.email = "El email es requerido"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!values.password){
        errors.password = "El password es requerido"
    }else if(values.password.length < 8 || values.password.length > 20){
        errors.password = "El password debe tener entre 8 y 20 caracteres"
    }else if (values.password.includes(" ")){
        errors.password = "El password no puede contener espacios"
    }

    if (!values.cpassword) {
        errors.cpassword = "El password es requerido"
    }else if (values.cpassword !== values.password) {
        errors.cpassword = "Los passwords no coinciden"
    }else if (values.cpassword.includes(" ")){
        errors.cpassword = "El password no puede contener espacios"
    }


    return errors


}