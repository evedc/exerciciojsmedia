const precoEtiqueta = 100;
const metodoPagamento = 4;

if (metodoPagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (metodoPagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (metodoPagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}