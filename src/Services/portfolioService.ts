import api from "./api";

export interface Portfolio{
    id: number;
    link: string;
    image: string;
    descricao: string;
}

export const createPortfolio = async (portfolio: Portfolio) => {
    const response = await api.post('/portfolio', portfolio);
    return response.data;
}

export const getPortfolio = async () => {
    const response = await api.get('/portfolio');
    return response.data;
}

export const getPortfolioById = async (id: number) =>{
    const response = await api.get(`/portfolio/${id}`);
    return response.data;
}

export const updatePorfolio= async (portfolio: Portfolio) =>{
    const response = await api.put(`/portfolio/${portfolio.id}`, portfolio);
    return response.data;
}

export const deletePortfolio = async (id: number) =>{
    const response = await api.delete(`/portfolio/${id}`);
    return response.data;
}

export const createOrUpdatePortfolio = async (portfolio: Portfolio) => {
    const naoTemId = !portfolio.id

    if (naoTemId) {
        return await createPortfolio(portfolio);
    } else {
        return await updatePorfolio(portfolio);
    }
}



