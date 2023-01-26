
/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const Telefono: Producto = {
    desc: 'Nokia A1',
    precio:150
}

const Tableta: Producto = {
    desc: 'iPad Air',
    precio:350
}

export function calcularISV(productos: Producto[]):[number,number]{

    let total = 0;

    productos.forEach( ({precio}) =>{
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos = [Telefono,Tableta];

const [total, isv] = calcularISV(articulos);

console.log('Total:',total);
console.log('ISV:',isv);