import axios from "axios";

const apiProductsUrl = "http://localhost:3000/products";

const getAllProducts = async () => {
    const response = await axios.get(apiProductsUrl);
    return response.data;
};

const createProduct = async (newProduct) => {
    const response = await axios.post(apiProductsUrl, newProduct);
    return response.data;
};

const deleteProduct = async (id) => {
    await axios.delete(`${apiProductsUrl}/${id}`);
};

const updateProduct = async (id, updatedProduct) => {
    const response = await axios.put(`${apiProductsUrl}/${id}`, updatedProduct);
    return response.data;
};

export {
    getAllProducts,
    createProduct,
    deleteProduct,
    updateProduct
};
