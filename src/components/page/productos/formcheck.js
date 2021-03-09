import React from "react";
import { FaUser } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FcPhone  } from "react-icons/fc";

function CheckoutForm(props) {
  const name = props.setName;
  const phone = props.setPhone;
  const email = props.setEmail;
 

  function setName(event) {
    name(event.target.value);
  }
  function setPhone(event) {
    phone(event.target.value);
  }
  function setEmail(event) {
    email(event.target.value);
  }
 
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div class="col-md-12 ">
            <div class="well well-sm">
              <form class="form-horizontal" method="post">
                <fieldset>
				<h3 class="text-center orden">Orden de Compra</h3>
                  <div className="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center">
                      <FaUser className="bigicon" />
                    </span>
                    <div class="col-md-12">
                      <input
                        id="fname"
                        name="name"
                        type="text"
                        class="form-control"
                        placeholder="Nombre"
                        required
                        onChange={setName}
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center">
                      <SiGmail className="bigicon" />
                    </span>
                    <div class="col-md-12">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        class="form-control"
                        placeholder="Correo Electronico"
                        required
                        onChange={setEmail}
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <span class="col-md-1 col-md-offset-2 text-center">
                      <FcPhone class="bigicon" />
                    </span>
                    <div class="col-md-12">
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        class="form-control"
                        placeholder="Numero de telefono"
                        required
                        onChange={setPhone}
                      />
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutForm;
