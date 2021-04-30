import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
//import { toast } from "react-toastify";

const AlumnosForm = (props) => {

  const initialStateValues = {
    nombre: "",
    apellido: "",
    edad: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addOrEditAlumno(values);
    setValues({ ...initialStateValues });
  };

  const getAlumnoById = async (id) => {
    const doc = await firestore.collection("Alumnos").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      //https://stackoverflow.com/questions/56059127/how-to-fix-this-error-function-collectionreference-doc
      if (props.currentId !== null && props.currentId !== undefined) {
        getAlumnoById(props.currentId);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);

  return (
    <form onSubmit={handleSubmit} className="card card-body border-primary">
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese Nombre de la sucursal"
          value={values.nombre}
          name="nombre"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
         
        </div>
        <input
          type="text"
          value={values.apellido}
          name="apellido"
          placeholder="Ingrese Cantidad"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
 
        </div>
        <input
          type="text"
          value={values.edad}
          name="edad"
          placeholder="Ingrese Empleados"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-primary btn-block">
        {props.currentId === "" ? "Guardar" : "Actualizar"}
      </button>
    </form>
  );
};

export default AlumnosForm;
