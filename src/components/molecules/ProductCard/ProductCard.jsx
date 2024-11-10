import { useEffect } from "react";
import { useState } from "react"
import './ProductCard.css';
import Button from "../../atoms/Button/Button";
import { getAllProducts } from "../../../services/ApiProductService";
import añadirImage from "../../../assets/images/añadir.png"
import { Link } from "react-router-dom";

const ProductCard = () => {

    const [ProductCard, setProductCard] = useState([]);

    const getAllProductsApiservice = async () => {
        const response = await getAllProducts();
        setProductCard(response);
    }
    useEffect(() => {
        getAllProductsApiservice()
    }, [])

    return (
        <>
            <Link to="/Createproduct">
                <img src={añadirImage} alt="Add Product" />
            </Link>
            <section className="container-section">

                <div className="products-card">
                    {
                        ProductCard.map((product) =>
                            <div className="card" key={product.id}>
                                <img src={product.image} alt="" />
                                <p>{product.name}</p>
                                <p>{product.description}</p>
                                <p>{product.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</p>
                                <Button />
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default ProductCard
