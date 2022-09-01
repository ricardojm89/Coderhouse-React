import './App.css';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import Item from './Componets/Item';
import Titulo from './Componets/Titulo';
import Input from './Componets/Input';

function App() {
  const lista = ["Desarollo Web", "javascript", "React JS"]
  const items = lista.map(items => (
    <Item valor={items} />
  ))

  return (

    <div className='container'>

        <Header curso= "Curso de " tipo="React" />
        <Titulo valor ="Cursos de Coder House" />
        <ul>
          {items}
        </ul>
        <Titulo valor="Formulario Contacto" />
        <div>
          <label>Nombre</label>
          <Input valor="Nombre" /><br />
          <label>Email</label>
          <Input valor="Email" />
        </div>
        <Footer ubicacion="CoderHouse" anio="2022" />
    </div>
    

  );

}

export default App;












/* Ejemplo clase 1
  let imagen = "mcdonalds.png";
  let titulo = "Doble Cuarto de Libra";
  let calorias = "771 kcal";
  let descripcion = "Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza.";
*/

/* Clase 2
//new Set sirve para crear elementos unicos,que no se repitan. Por ej:
 console.log(Array.from(new Set([1,2,3,3,2])));//aca solo saldria 1,2,3
 console.log(Array.from(new Set(["a","b","c","b","c"])));
 //sin new Set quedaria asi
console.log([1,2,3,4,2,3,1]);//aca saldrian todos numeros dentro del array 1,2,3,4,2,3,1
*/
/* Ejemplo clase 1
    <div className="container">
      <div className='row'>
        <div className="col-md-4 offset-md-2">
          <img src={imagen} alt={titulo} className="img-fluid" />
        </div>
        <div className="col-md-4 ">
          <h1>{titulo}</h1>
          <p>{calorias}</p>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>*/

    /*  function App() {
  let titulo = "Productos"
  const productos = [
            {id:1, nombre:"Coca-cola", precio:"500"},
            {id:2, nombre:"Pepsi", precio:"300"},
            {id:3, nombre:"Fernet", precio:"1400"},
            {id:4, nombre:"Gin", precio:"3500"}
              
        <Header />
        <h3>{titulo}</h3>
        
        <ul>
        { //Las llaves sirven para decir que estamos metiendo cod. JS 
          productos.map(item => (
            <li key={item.id}> {item.nombre}- {item.precio}</li>
          ))
        }
        </ul>
        <Footer /> */

