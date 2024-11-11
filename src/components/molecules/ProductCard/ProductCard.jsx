import { useEffect, useState } from "react";
import './ProductCard.css';
import Button from "../../atoms/Button/Button";
import { getAllProducts, deleteProduct } from "../../../services/ApiProductService";
import añadirImage from "../../../assets/images/añadir.png";
import deleteImage from "../../../assets/images/eliminar.png";
import putImage from "../../../assets/images/modificar.png";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ setEditingProduct }) => {
    const [productCard, setProductCard] = useState([]);
    const navigate = useNavigate();

    const getAllProductsApiService = async () => {
        const response = await getAllProducts();
        setProductCard(response);
    };

   
    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            setProductCard(productCard.filter(product => product.id !== id));
        } catch (error) {
            console.error("Error al eliminar:", error);
        }
    };

    
    const handleUpdate = (product) => {
        setEditingProduct(product);
        navigate("/createproduct"); 
    };

    useEffect(() => {
        getAllProductsApiService();
    }, []);

    return (
        <>
            <Link to="/createproduct">
                <img src={añadirImage} alt="Add Product" />
            </Link>
            <section className="container-section">
                <div className="products-card">
                    {productCard.map((product) => (
                        <div className="card" key={product.id}>
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-info">
                                <p>{product.name}</p>
                                <p>{product.description}</p>
                                <p>{product.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</p>
                            </div>
                            <Button btnText="Comprar" />

                            
                            <div className="crud-buttons">
                                <button onClick={() => handleUpdate(product)} className="btn-update">
                                    <img src={putImage} alt="Update Product" /> Actualizar
                                </button>
                                <button onClick={() => handleDelete(product.id)} className="btn-delete">
                                    <img src={deleteImage} alt="Delete Product" /> Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProductCard;
