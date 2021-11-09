function podeSubir(altura, cia) {
    if ((altura >= 1.20 && altura < 1.40 && cia == 1) || (altura >= 1.40 && altura < 2.0)) {
        console.log("Acesso autorizado")
    }
    else if (altura < 1.20) {
        console.log("Acesso não autorizado")
    }
}

podeSubir(1.60, 0);