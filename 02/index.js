const carros = [
    {
        marca:"VW",
        modelo:'Jetta',
        ano:'2020',
        cor:'prata',
        quantidade_portas:'4',
        automatico:true,
    },
    {
        marca:'Fiat',
        modelo:'linea',
        ano:'2020',
        cor:'preto',
        quantidade_portas:'2',
        automatico:false,
    },
    {
        marca:'Honda',
        modelo:'Civic Si',
        ano:'2010',
        cor:'Vermelho',
        quantidade_portas:'4',
        automatico:false,
    }
];

const textoAutomatico = carros[0].automatico ? "é automático" : "não é automático";

console.log(`carro de marca ${carros[0].marca}, modelo ${carros[0].modelo}, ano ${carros[0].ano}, cor ${carros[0].cor}, quantidade de portas ${carros[0].quantidade_portas} e seu cambio ${textoAutomatico}` );