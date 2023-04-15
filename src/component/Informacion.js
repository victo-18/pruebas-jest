import { useState } from "react";
import "../css/Component.css";
import jQery from "../img/JQuery.jpg";
function Informacion() {
const [color,setColor]=useState('white')
  return (
    <div className="contenedor__informacion">
      <article className="article" title="parrafo principal"
       style={{background:color}}>
        <h1 className="titulo" data-testid="titulo">
          Create React App
        </h1>
       
        <div className="imagen">
          <img src={jQery} alt="imagen" />
        </div>
        <p className="parrafo" data-testId="contesto">
          Create React App es un ambiente cómodo para aprender React, y es la
          mejor manera de comenzar a construir una nueva aplicación de página
          única usando React. Create React App configura tu ambiente de
          desarrollo de forma que puedas usar las últimas características de
          Javascript, brindando una buena experiencia de desarrollo, y
          optimizando tu aplicación para producción. Necesitarás tener Node =
          14.0.0 y npm = 5.6 instalados en tu máquina. Para crear un proyecto
          ejecuta:
        </p>
      </article>
      <div className="">
        <button type="button"  className="button btn-primary"
        onClick={()=>setColor(color==='white'? 'black':'white' )}
        >Cambia-color</button>
      </div>
    </div>
  );
}
export default Informacion;
