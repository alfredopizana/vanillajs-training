


const unaConstante = {}
const segundaConstante = { d : "d",e: "elefante", f : "", g: "g" }
 unaConstante["a"] = "a"
unaConstante.b = "b"
unaConstante.c = "c"

const unArreglo =  [
    {nombre: "sofy", apellido:"hdz", "ocupacion": "pastelera",escuela: "CETI"},
    {nombre: "alfredo", apellido:"pizana", "ocupacion": "maestro",escuela: "CETI"},
    {nombre: "lore", apellido:"hdz", ocupacion: "maestro",escuela: "EDU"},
    {nombre: "vero", apellido:"hdz", ocupacion: "cocinero",escuela: "EDU"},
    {nombre: "ramon", apellido:"pizana", ocupacion: "entrenado",escuela: "UDG"},
]
/**
 *  [
 * "CETI":[
 *   {nombre: "sofy", apellido:"hdz", "ocupacion": "pastelera",escuela: "CETI"},
 *   {nombre: "alfredo", apellido:"pizana", "ocupacion": "maestro",escuela: "CETI"},
 * ], 
 * "EDU":[
 *      {nombre: "lore", apellido:"hdz", ocupacion: "maestro",escuela: "EDU"},
        {nombre: "vero", apellido:"hdz", ocupacion: "cocinero",escuela: "EDU"},
 * ]
 * "UDG":[
 *          {nombre: "ramon", apellido:"pizana", ocupacion: "entrenado",escuela: "UDG"},
 * ]
]
 * 
 */
function hola(){}

const saludar = () => { }

//Map

let retornoDeMap = unArreglo.map( ( { nombre,apellido } ) =>{


    const nombreCompleto = nombre + " " + apellido
    const saludo = `Hola soy ${ nombre} ${apellido}`
    return {saludo}
})

console.log({retornoDeMap})
//Filter
let arregloFiltrado = unArreglo.filter(({escuela}) =>  escuela === "CETI"  )
console.log(arregloFiltrado)

let arregloConReduce = unArreglo.reduce( 
    (previousValueOAccum, currentValue, index,arrayOriginal)=>{
        const {escuela,nombre,ocupacion} = currentValue
        
        if(escuela === "CETI"){
            return [...previousValueOAccum,
                {[escuela]: ocupacion, saludo: `Hola soy ${nombre}`}]
        }
        return previousValueOAccum
},[])
console.log(arregloConReduce)

let escuelas = unArreglo.reduce((previous,current,index,original) => {
    const { escuela } = current
    //let escuelas = previous
 /*if(escuelas[escuela] === undefined){
    escuelas[escuela] = [current]

    return escuelas
 }
 else {
     let alumnos = [...escuelas[escuela],current]  // [  ...[{}],{}                   ]
     escuelas[escuela] = alumnos
     return escuelas
 }*/
     if(previous[escuela] === undefined)
    previous[escuela] = []
    previous[escuela] =  [...previous[escuela],current]
    return previous
}, {})

console.log(escuelas)
Object.keys(escuelas).map((escuela)=>{
    
    console.log(escuelas[escuela])
})