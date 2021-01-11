// required
const fs = require('fs');

let listarTabla = (base, limite) => {

    console.log("=========================");
    console.log(`===========TABLA DEL ${base}===============`.red);
    console.log("=========================");
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }


}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('Error');
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);


        });

    });
}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}