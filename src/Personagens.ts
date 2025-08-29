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
    experiencia: number ;

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
        this.experiencia = 0;
    }   
    treinarAtaque(numHoras: number) {
        const consumoManaPorHora = 20
        if(this.manaAtual >= consumoManaPorHora * numHoras){
        this.poderAtaque += (1 + Math.round(Math.random() * 50)* numHoras);
        }else{
            throw new Error("Mana insuficiente para treinar ataque");
        }
    }

    atacar( P2: personagem): void {
        let dadoAtaqueP = (Math.floor(1 + Math.random() * 20));
        let dadoAtaquep2 = (Math.floor(1 + Math.random() * 20));
        let ataqueP = this.poderAtaque + this.forca;
        let ataqueP2 = P2.poderAtaque + P2.forca;
        
        if (dadoAtaqueP < dadoAtaquep2){
            P2.vidaAtual -= ataqueP;
        }else{
            this.vidaAtual -= ataqueP2;
            
        }
    


    }

    standby(){
        if (this.manaAtual <= 35){
            let recuperarMana = this.manaAtual + (this.manaMaxima * 0.10);
            return recuperarMana;
        }else{
            console.log("Mana ok");
            return this.manaAtual;
        }
    }
    
}
    
        

        
    
    


    

