import axios from "axios"


export const productsAPI = async () =>{

    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }

}