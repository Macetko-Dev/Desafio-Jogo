// classe e dentro dela uma função com propriedades
class hero{
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
// dando comportamento para classe com metodos que é uma função(dentro de classe não precisa utilizar a palavra function)
attack() {
    let ataque = '';

    switch (this.type) {
        case 'mago':
            ataque = 'Anéis do Pesadelo';
            break;
        case 'guerreiro':
            ataque = 'Stum Da Sonolencia';
            break;
        case 'monge':
            ataque = ' Nunchakus';
            break;
        case 'ninja':
            ataque = 'Shuriken Flamejantes';
            break;
        default:
            ataque = ' um ataque desconhecido';
    }

    console.log(`O ${this.type} atacou usando ${ataque}`);
}
}
// objetos que usa a classe instancia a classe
let DieHard = new hero("DieHard", 20, "guerreiro");
let GoodTaylor = new hero("GoodTaylor", 106, "Mago");
let DungeonLee = new hero("DungeonLee", 66, "Monge");
let Kakashi01 = new hero("Kakashi01", 23, "Ninja");

//chamar os métodos nas instâncias da classe 
/* O método attack() verifica o tipo do herói e atribui o ataque apropriado com base nesse tipo. Quando você chama o método attack() em cada instância do herói, ele imprimirá a mensagem correta de acordo com o tipo.*/

DieHard.attack();
GoodTaylor .attack();
DungeonLee.attack();
Kakashi01.attack();