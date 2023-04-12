const BASE_URL = 'http://localhost:3000';

export const getTalentos = async  () => {
    const reponse = await fetch(`${BASE_URL}/api/talentos`)
    const json = await reponse.json()

    return json
}

export const getTalento = async  (talentoId) => {
    const reponse = await fetch(`${BASE_URL}/api/talentos/${talentoId}`)
    const json = await reponse.json()

    if (json) return json;
    return {}
}

export async function addTalento(formData){
    try{
        const Options={
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}/api/talentos`, Options)
        const json = await response.json()
        return json

    }catch(error){
        return error;
    }
}

export async function updateTalento(talentoId,formData){
    try{
        const Options={
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}/api/talentos/${talentoId}`, Options)
        const json = await response.json()
        return json

    }catch(error){
        return error;
    }
}

export async function deleteTalento(talentoId){
    try{
        const Options={
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }
        const response = await fetch(`${BASE_URL}/api/talentos/${talentoId}`, Options)
        const json = await response.json()
        return json

    }catch(error){
        return error;
    }
}