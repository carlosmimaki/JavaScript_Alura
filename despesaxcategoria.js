// Jéssica criou um aplicativo de finanças para ter um melhor controle de seus gastos, visto que ela estava gastando muito com eletrônicos.

// Ela queria ver qual a porcentagem de sua renda era destinada a cada categoria de gastos e para isto ela usava um simples cálculo:

// var despesaCategoria = 1532;
// var rendaTotal = 6255;

// var porcentagemCategoria = (despesaCategoria/rendaTotal) * 100;

// console.log(porcentagemCategoria);

// Jéssica viu que ela não tinha interesse em saber a porcentagem com tantas casa decimais , como neste exemplo que iria ficar um número muito feio (24.49240607513989). Para o caso dela, uma casa decimal seria o suficiente.

// Qual alteração no código dela faria com que o número de casas decimais ficasse limitado a uma casa decimal ?

var despesaCategoria = 1532;
var rendaTotal = 6255;

var porcentagemCategoria = despesaCategoria/rendaTotal * 100;

console.log(porcentagemCategoria.toFixed(1));

// Podemos controlar o número de casas decimais exibidas através da função .toFixed().

// A função toFixed() deve ser usadas em números, logo se queremos transformar o porcentagemCategoria em um número com apenas uma casa decimal, devemos fazer:

// porcentagemCategoria.toFixed(1);COPIAR CÓDIGO
// O número passado entre parêntenses deve ser o número de casas decimais para formatar o porcentagemCategoria.