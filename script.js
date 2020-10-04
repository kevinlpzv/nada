const lista = document.getElementById("lista");
var personas =['Sergio Rodriguez','El cri cri','Jebsito','Grisel Reza']

const agregarpersona = () =>{
    var nombre = document.getElementById("nombre");
    lista.innerHTML= '';
    personas.push(nombre.value);
    mostrarValores();
    nombre.value ="";
 }
const mostrarValores = () =>{
personas.map(persona => {

    var li = document.createElement('li');
    li.innerHTML = persona;
    lista.appendChild(li);
})
}
const borrarValores =() =>{
    lista.innerHTML = '';
    personas = [];
}
