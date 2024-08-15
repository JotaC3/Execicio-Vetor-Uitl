// copiar a para b
function copia(a){
let b = [];

for(let cont = 0; cont<a.length; cont++){
    b[cont] = a[cont];
}

return b;
}

module.exports = {
    copia
}