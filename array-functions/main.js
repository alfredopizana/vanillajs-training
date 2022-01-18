


const unaConstante = {}
const segundaConstante = { d : "d",e: "elefante", f : "", g: "g" }
 unaConstante["a"] = "a"
unaConstante.b = "b"
unaConstante.c = "c"

const unArreglo =  [
    {nombre: "sofy", apellido:"hdz", "ocupacion": "pastelera",escuela: "CETI"},
    {nombre: "alfredo", apellido:"pizana", "ocupacion": "maestro",escuela: "CETI"},
    {nombre: "lore", apellido:"hdz", ocupacion: "maestro",escuela: "EDU"},
]

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