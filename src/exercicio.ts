function mult(a: number, b: number): number {
    return a * b;
}

function ola(nome:string): string{
    return('Olá' + nome + '.')
}

const resultadoMult = mult(2, 5);
const saudacao = ola('Edmar');

console.log(resultadoMult);
console.log(saudacao);