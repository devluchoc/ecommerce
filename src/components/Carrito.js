import React, { useContext, useState } from "react";
import { DataContext } from "context/DataProvider";
import CheckoutForm from "./page/productos/formcheck";
import { getFirestore } from "../firebase/index";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const MySwal = withReactContent(Swal);
  
  async function createOrder() {
    const buyer = {
      name: name,
      phone: phone,
      email: email,
    };

    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrder = {
      buyer,
      date: Date.now(),
      total: total,
    };
    orders
      .add(newOrder)
      .then(function (docRef) {
        succeed(docRef.id);
        console.log(
          "Documento creado.Id:",
          docRef.id
        );
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  function succeed(id) {
    MySwal.fire({
      position: "center",
      icon: "success",
      title: `Orden  creada satisfactoriamente! El ID es ${id}`,
    });
  }



  const tooglefalse = () => {
    setMenu(false);
	};
	
	const reduce = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
			}
			setCarrito([...carrito])
		})
	}
	const increase = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.cantidad +=1;
			}
			setCarrito([...carrito])
		})
	}

	const removeProducto = id =>{
		if(window.confirm("¿Quieres suspender el producto?")){
			carrito.forEach((item, index)=>{
				if(item.id === id){
					item.cantidad = 1;
					carrito.splice(index, 1)
				}
			})
			setCarrito([...carrito])
		}
	}

  const show1 = menu ? "carritos show" : "carrito";
	const show2 = menu ? "carrito show" : "carrito";
	


  return (
    <div className={show1}>
      <div className={show2}>
        <div onClick={tooglefalse} className="carrito__close">
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su Carrito</h2>
        <div className="carrito__center">
					{
					
					
					carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize: "3rem"}}>Carrito Vacio</h2> :<>
					{
					carrito.map((producto) => (
            <div className="carrito__item" key={producto.id}>
              <img src={producto.image} alt={producto.title} />
              <div>
                <h3> {producto.title} </h3>
                <p className="price">${producto.price}</p>
              </div>
              <div>
								<box-icon 
									onClick={() => increase(producto.id)} name="up-arrow" 
									type="solid"
									/>
                <p className="cantidad">{producto.cantidad}</p>
								<box-icon 
									onClick={() => reduce(producto.id)} 
									name="down-arrow" 
									type="solid" 
									/>
              </div>
							<div 
							onClick={() => removeProducto(producto.id)} 
							className="remove__item"
							>
                <box-icon name="trash" />
              </div>
            </div>
					))
				}
					 <CheckoutForm  setName={setName}
            setPhone={setPhone}
            setEmail={setEmail}
             />
			 
					</>
					}
        </div>

        <div className="carrito__footer">
          <h3>Total: ${total}</h3>
          <button className="btn" onClick={createOrder} disabled={
 
									name === null ||
									phone === null ||
									email === null ||
									name.length < 1 ||
									email.length < 1 ||
									phone.length < 1
									} >Comprar</button>
        </div>
      </div>
    </div>
  );
};
