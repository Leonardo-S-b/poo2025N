export class personagem {
    nome: string;
    classe: string ;
    raca: string ;
    nivel: number ;
    vida: number ;
    arma: string ;
    mana: number ;
    manaAtual: number ;
    manaMaxima: number ;
    vidaAtual: number; 
    vidaMaxima: number ;
    forca: number ;
    agilidade: number; 
    poderAtaque: number ;

    // Construtor da classe personagem usado para inicializar os atributos
    // cria uma instância de personagem com um nome e define os atributos iniciais
 constructor(nome: string) {
        this.nome = nome;
        this.classe = "";
        this.raca = "";
        this.nivel = 0;
        this.vida = 0; 
        this.arma = "";
        this.mana = 0;
        this.manaAtual = 0;
        this.manaMaxima = 0;
        this.vidaAtual = 0;
        this.vidaMaxima = 0;
        this.forca = 0;
        this.agilidade = 0;
        this.poderAtaque = 0;
    }
 treinarPoderAtaque(): void {
        this.poderAtaque += 3 + this.poderAtaque * 1.1;
    }



}

