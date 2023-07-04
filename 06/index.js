const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const adultos = []
const jovens = []
for (let convidado of usuarios) {
    if (convidado.idade >= 18) {
        adultos.push(convidado)
    } else {
        jovens.push(convidado)
    }
}
console.log(adultos)
console.log(jovens)