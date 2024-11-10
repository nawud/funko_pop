
import { useState } from 'react';
import { CreateProduct } from '../../../services/ApiProductService';
import './Createproduct.css'
const Createproduct = () => {
  const [Producto, setProducto] = useState("");
  const [Categoria, setCategoria] = useState("");
  const [Imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const addProduct = async (event) => {
    event.preventDefault()

    const newProduct = {
      name: Producto,
      category: Categoria,
      image: Imagen,
      description: descripcion
    }
    await CreateProduct(newProduct);

  }
  return (
    <>
      <form onSubmit={addProduct}>
        <div>
          <label>Nombre del producto</label>
          <input type="text"
            value={Producto}
            onChange={(event) => setProducto(event.target.value)} />
        </div>
        <div>
          <label>Categoria</label>
          <input type="text"
            value={Categoria}
            onChange={(event) => setCategoria(event.target.value)} />
        </div>
        <div>
          <label>Imagen</label>
          <input type="text"
            value={Imagen}
            onChange={(event) => setImagen(event.target.value)} />
        </div>
        <div>
          <label>Descripcion</label>
          <input type="text"
            value={descripcion}
            onChange={(event) => setDescripcion(event.target.value)} />
        </div>
        <button type="submit" className="btn-add">Añadir producto</button>

      </form>
    </>
  )
}

export default Createproduct
