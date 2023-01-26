
/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion:string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen:90,
    segundo:36,
    cancion:'Mes',
    detalles:{
        autor:'Ed Sheeran',
        anio:2015
    }
}

//Desestructuracion de objetos

const {volumen, segundo, cancion,detalles} = reproductor;
const{autor} = detalles;

console.log('El volumen actual es ', volumen)
console.log('El segundo actual es ', segundo)
console.log('La canción actual es ', cancion)
console.log('El Autor es ', autor )


const dbz: string[] = ['Goku','Vegeta','Thunks'];

const [goku, vegeta, thunks] = dbz;

console.log('Personaje 1: ', goku);
console.log('Personaje 2: ', vegeta);
console.log('Personaje 3: ', thunks);


