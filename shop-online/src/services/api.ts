import axios from 'axios';

const claient = axios.create({
    baseURL: 'http://localhost:8001',
    });

export async function getProducts() {
    const { data } = await claient.get('/products');
    return data;
}