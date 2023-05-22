import api from "./api";

export interface Experiencia {
    id: number;
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: string;
    anoFim: string;
}

export const createExperiencia = async (experiencia: Experiencia) => {
    const response = await api.post('/experiencias', experiencia);
    return response.data;
}

export const getExperiencias = async () => {
    const response = await api.get('/experiencias');
    return response.data;
}

export const getExperienciasById = async (id: number) =>{
    const response = await api.get(`/experiencias/${id}`);
    return response.data;
}

export const updateExperiencia= async (experiencia: Experiencia) =>{
    const response = await api.put(`/experiencias/${experiencia.id}`, experiencia);
    return response.data;
}

export const deleteExperiencia = async (id: number) =>{
    const response = await api.delete(`/experiencias/${id}`);
    return response.data;
}

export const createOrUpdateExperiencia =async (experiencia: Experiencia) => {
    const naoTemId = !experiencia.id

    if (naoTemId) {
        return await createExperiencia(experiencia);
    } else {
        return await updateExperiencia(experiencia);
    }
}