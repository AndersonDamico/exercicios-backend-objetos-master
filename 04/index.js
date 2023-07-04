
const usuarios = [
    {
        nome: "João",
        idade: 25
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

let maioridade = []
for (let usuario of usuarios) {
    let anos = usuario.idade 
      maioridade = anos >= 18 ? true : false
   usuario.maior_Idade = maioridade
}

console.log(usuarios)

