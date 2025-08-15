import { personagem } from "./Personagens";

const p: personagem = new personagem();
p.nome = "Edécio";
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

console.table(p);

