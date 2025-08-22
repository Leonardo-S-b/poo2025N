import { personagem } from "./Personagens";
import prompt from "prompt-sync";
const teclado = prompt();

const p: personagem = new personagem("edécio");
p.classe = "Monge";
p.raca = "morto-vivo";
p.nivel = Math.floor(1 + Math.random() * 99);
p.arma = "Cajado";
p.manaMaxima = 100;
p.manaAtual = p.manaMaxima;
p.vidaMaxima = 100;
p.vidaAtual = p.vidaMaxima;
p.poderAtaque = 1;
p.forca = 1;
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
            treinarPoderAtaque(p);
            break;
        case 2:
            console.table(p);
            break;



        default:
            console.log("opção invalida");
    }
function treinarPoderAtaque(p: personagem): void {
    p.treinarPoderAtaque();
   
}
} 
//função para treinar a desgraça do personagem agora funciona
 