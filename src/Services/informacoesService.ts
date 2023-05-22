import api from "./api";

export interface Informacoes{
    id: number;
    foto: string;
    nome: string;
    cargo: string;
    resumo: string;
}

export async function updateInformacoes(informacoes:Informacoes): Promise<Informacoes> {
    // post cadstrar informação
    // put atualizar / editar informação put('/informacoes/*1*')
    const response = await api.put<Informacoes>(`/informacoes/${informacoes.id}`, informacoes);
    return response.data;
}

export async function getInformacoes(): Promise<Informacoes> {
    const response = await api.get<Informacoes>('/informacoes');
    return response.data;
}

// export async function deleteInformacoes(): Promise<Informacoes> {
//     const response = await api.delete<Informacoes>('/informacoes/1');
//     return response.data;
// }


    // export async function updateInformacoes(informacoes:Informacoes): Promise<Informacoes> {
    //     // post cadstrar informação
    //     // put atualizar / editar informação put('/informacoes/*1*')
    //     const response = await api.post<Informacoes>('/informacoes/1', informacoes);
    //     return response.data;
    // }

// ALERT: NAO CONSIGO INSTALAR O AWAIT!!!
//  NAO CONSIGO INSTALAR O AXIOS
// NAO CONSIGO O JSON-SERVER