import { Arma, Armas } from "./armas";
import { personagem } from "./Personagens";
import prompt from "prompt-sync";
const teclado = prompt();

const p: personagem = new personagem("edécio");
p.classe = "Guerreiro";
p.raca = "morto-vivo";
p.nivel = Math.floor(1 + Math.random() * 99);
p.arma = "Cajado";
p.manaMaxima = 100;
p.manaAtual = p.manaMaxima;
p.vidaMaxima = Math.floor(100 + Math.random() * 100);
p.vidaAtual = p.vidaMaxima;
p.poderAtaque = Math.floor(1 + Math.random() * 10);
p.forca = Math.floor(1 + Math.random() * 10);

const p2: personagem = new personagem("Gladimir");
p2.classe = "Guerreiro";
p2.raca = "humano";
p2.nivel = Math.floor(1 + Math.random() * 99);
p2.arma = "Espada longa";
p2.manaMaxima = 100;
p2.manaAtual = p2.manaMaxima;
p2.vidaMaxima = Math.floor(100 + Math.random() * 100);
p2.vidaAtual = p2.vidaMaxima;
p2.poderAtaque = Math.floor(1 + Math.random() * 10);
p2.forca = Math.floor(1 + Math.random() * 10);

p2.atacar(p);

const arma: Arma = new Arma("espada longa", 15, "duas mãos");

const arma2: Armas = new personagem("espada curta");
arma2.nome = "Espada Curta";
arma2.dano = 10;
arma2.tipo = "uma mão";



//menu de opções
while (true) {

    console.log("+------------------- menu------------------+");
    console.log("|1.treinar poder de ataque|");
    console.log("|2.ver status                 |");
    console.log("|9.sair                   |");
    console.log("+------------------------------+");
    const escolha: number = +teclado("Escolha uma opção: ");
    if (escolha === 9) {
        break;
    }
    switch (escolha) {
        case 1:
           
            break;
        case 2:
            console.table(p);
            break;



        default:
            console.log("opção invalida");
    }

}



//função para treinar a desgraça do personagem agora funciona
 