import { useEffect, useState } from 'react';
import { createProduct, updateProduct } from '../../../services/ApiProductService';
import './Createproduct.css';

const CreateProduct = ({ editingProduct, setEditingProduct }) => {
  const [producto, setProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setProducto(editingProduct.name);
      setCategoria(editingProduct.category);
      setImagen(editingProduct.image);
      setDescripcion(editingProduct.description);
    }
  }, [editingProduct]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newProduct = {
      name: producto,
      category: categoria,
      image: imagen,
      description: descripcion
    };

    if (editingProduct) {
      await updateProduct(editingProduct.id, newProduct);
      setEditingProduct(null);
    } else {
      await createProduct(newProduct);
    }

    
    setProducto("");
    setCategoria("");
    setImagen("");
    setDescripcion("");
  };

  return (
    <>
      <h2>{editingProduct ? "Editar Producto" : "Formulario"}</h2>
      <div className='form-data'>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre del producto</label>
            <input type="text" value={producto} onChange={(event) => setProducto(event.target.value)} />
          </div>
          <div>
            <label>Categoria</label>
            <input type="text" value={categoria} onChange={(event) => setCategoria(event.target.value)} />
          </div>
          <div>
            <label>Imagen</label>
            <input type="text" value={imagen} onChange={(event) => setImagen(event.target.value)} />
          </div>
          <div>
            <label>Descripcion</label>
            <input type="text" value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />
          </div>
          <button type="submit" className="btn-add">{editingProduct ? "Actualizar" : "Añadir"} producto</button>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
