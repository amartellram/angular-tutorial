function activar(nombre, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = nombre + " activ\u00F3 la " + objeto + " en la " + momento;
    }
    else {
        mensaje = nombre + " activ\u00F3 la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon", "batisenial", "tarde");
