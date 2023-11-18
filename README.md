<p> <h1 align="center">Lógica de Programação, trabalhando com classes</h1></p>

 Nesse modulo aprendemos várias coisas relacionadas ao uso de classes em JavaScript ou em qualquer outra linguagem:

1. **Criação de Classes:** Aprendemos como criar classes em JavaScript usando a palavra-chave `class`. Isso permite definir estruturas de objeto reutilizáveis com propriedades e métodos.

2. **Construtores:** Aprendemos a usar o construtor da classe (`constructor`) para inicializar as propriedades de um objeto quando uma nova instância da classe é criada. Isso permite que os objetos tenham valores iniciais específicos.

3. **Métodos de Classe:** Aprendemos como adicionar métodos às classes, que são funções associadas aos objetos criados a partir dessa classe. No código fornecido, o método `attack()` foi adicionado à classe `hero`.

4. **Atributos de Classe:** Aprendemos a definir atributos de classe, que são propriedades compartilhadas por todas as instâncias da classe. No código fornecido classes de um jogo, os atributos `name`, `age` e `type` são definidos como atributos de classe.

5. **Uso de `this`:** Aprendemosa usar a palavra-chave `this` para se referir ao objeto atual dentro dos métodos de classe. Isso é fundamental para acessar e manipular as propriedades e métodos do objeto.

6. **Instanciando Objetos:** Aprendemos como criar instâncias da classe usando o operador `new`, o que permite criar objetos com base na estrutura da classe.

7. **Polimorfismo Simples:** Aprendemos a  implementar um método `attack()` que exibe mensagens diferentes com base no tipo de herói. Isso demonstra um conceito de polimorfismo, onde objetos do mesmo tipo (classe) podem se comportar de maneiras diferentes.

8. **Comentários e Documentação:** Usamos comentários para documentar o código e explicar o que cada parte faz, o que é uma boa prática para tornar o código mais legível e compreensível.

No geral,  tivemos uma  compreensão básica de como criar classes, instanciar objetos, definir propriedades e métodos, e usar o `this` para interagir com objetos em JavaScript. Também aplicamos conceitos de polimorfismo para personalizar o comportamento de objetos com base em seu tipo. Esses são conceitos fundamentais ao trabalhar com orientação a objetos em JavaScript.

Desafio: Escrevendo as classes de um Jogo

O que deve ser utilizado:
Variáveis 
Operadores
Laços de repetição
Estruturas de decisões
Funções
Classes e Objetos

Objetivo
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- [x] nome
- [x] idade
- [x] tipo (ex: guerreiro, mago, monge, ninja )

Além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- [x] Exibir a mensagem: "o {tipo} atacou usando {ataque}")
- [x] Aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- [x] E no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

- [x] Se mago -> no ataque exibir (usou magia)
- [x] Se guerreiro -> no ataque exibir (usou espada)
- [x] Se monge -> no ataque exibir (usou artes marciais)
- [x] Se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- [x]  "o {tipo} atacou usando {ataque}"

- [x] ex: mago atacou usando magia guerreiro atacou usando espada


## Tecnologias utilizadas

<a href="#" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="html" width="40" height="40"/> </a> 

<a href="#" target="_blank"> <img src="https://camo.githubusercontent.com/ee5225ba7c4338f1a1c10121ec32c396e1a4a2f5b0b58b6afd6d5c56ff5d6196/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7673636f64652f7673636f64652d6f726967696e616c2d776f72646d61726b2e737667" alt="firebase" width="40" height="40"/> </a>

#### Formação Lógica de Programação da Dio.me administrado pelo mentor Felipe Aguiar / Tech Lead da DIO

[DIO](https://www.dio.me/).
