import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "context/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";

export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl]= useState(0)
  const [images, setImages] = useState('')
  const params = useParams();
  let item = 0;

  useEffect(() =>{
    console.log('re render' , params.id)
    item=0;
    productos.forEach(producto =>{
      if(producto.id === parseInt(params.id)){
        setDetalle(producto)
        setUrl(0)
      }
    })
  },[params.id, productos])

  console.log(url)

  useEffect(() =>{
    const values = `${detalle.img1}${url}${detalle.img2}`;
    setImages(values) 
  },[url, params.id])

  const handleInput = (e) =>{
  const number = e.target.value.toString().padStart(2,'01')
   setUrl(number)
  }

  if(detalle.length < 1) return null;

  return (
    <>
    {
        <div className="detalles">
          <h2>{detalle.title}</h2>
          
          {
            url ? <img src={images} alt={detalle.title}/> : <img src={detalle.image} alt={detalle.title}/>
          }
          <input type="range" min="1" max="36" step="1" value={url} onChange={handleInput} />
          <div className="description container">
          <p><b>description: </b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus soluta alias porro, saepe facere expedita asperiores quos fugit inventore ex, itaque sapiente quae pariatur beatae optio repellat aperiam quia possimus mollitia repellendus? Illo natus quam eaque impedit omnis pariatur!</p>
          </div>
          <div className="">
            <div className="d-flex justify-content-center ">
              <div className="">
                <select class="form-select tamano" id="validationDefault04" required>
                <option selected disabled value="">Tamaño</option>
                <option>1 USA</option>
                <option>2 USA</option>
                <option>3 USA</option>
                <option>4 USA</option>
                <option>5 USA</option>
                <option>6 USA</option>
                <option>7 USA</option>
                </select>
                </div>
            </div>
            <div className="row">
              <p className="price display-3 col-sm-12 text-center">${detalle.price}</p>
              <div className="col-sm-12 text-center">
                <button type="button" class="btn btn-success" onClick={() => addCarrito(detalle.id)}>Añadir al carrito</button>
              </div>
          </div>
          </div>
          
        </div>
    }
    <div className="container">
      <div className="pt-5">
      <h2 className="relacionados text-center mx-auto mt-4 mb-3">Productos relacionados</h2>
      </div>
    
    <div className="productos container">
      {
        productos.map((producto)=>{
          if((item < 6)&&(detalle.category === producto.category)){
            item++;
          return <ProductoItem 
          key={producto.id}
          title={producto.title}
          image={producto.image}
          category={producto.category}
          price={producto.price}
          id={producto.id}
          />
          }
          
        
        })
      }
     
    </div>
    </div>
    </>
  )
}
