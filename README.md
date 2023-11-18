Lógica de Programação, trabalhando com classes
Nesse modulo aprendemos várias coisas relacionadas ao uso de classes em JavaScript ou em qualquer outra linguagem:

Criação de Classes: Aprendemos como criar classes em JavaScript usando a palavra-chave class. Isso permite definir estruturas de objeto reutilizáveis com propriedades e métodos.

Construtores: Aprendemos a usar o construtor da classe (constructor) para inicializar as propriedades de um objeto quando uma nova instância da classe é criada. Isso permite que os objetos tenham valores iniciais específicos.

Métodos de Classe: Aprendemos como adicionar métodos às classes, que são funções associadas aos objetos criados a partir dessa classe. No código fornecido, o método attack() foi adicionado à classe hero.

Atributos de Classe: Aprendemos a definir atributos de classe, que são propriedades compartilhadas por todas as instâncias da classe. No código fornecido classes de um jogo, os atributos name, age e type são definidos como atributos de classe.

Uso de this: Aprendemosa usar a palavra-chave this para se referir ao objeto atual dentro dos métodos de classe. Isso é fundamental para acessar e manipular as propriedades e métodos do objeto.

Instanciando Objetos: Aprendemos como criar instâncias da classe usando o operador new, o que permite criar objetos com base na estrutura da classe.

Polimorfismo Simples: Aprendemos a implementar um método attack() que exibe mensagens diferentes com base no tipo de herói. Isso demonstra um conceito de polimorfismo, onde objetos do mesmo tipo (classe) podem se comportar de maneiras diferentes.

Comentários e Documentação: Usamos comentários para documentar o código e explicar o que cada parte faz, o que é uma boa prática para tornar o código mais legível e compreensível.

No geral, tivemos uma compreensão básica de como criar classes, instanciar objetos, definir propriedades e métodos, e usar o this para interagir com objetos em JavaScript. Também aplicamos conceitos de polimorfismo para personalizar o comportamento de objetos com base em seu tipo. Esses são conceitos fundamentais ao trabalhar com orientação a objetos em JavaScript.

Desafio: Escrevendo as classes de um Jogo

O que deve ser utilizado: Variáveis Operadores Laços de repetição Estruturas de decisões Funções Classes e Objetos

Objetivo Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

 nome
 idade
 tipo (ex: guerreiro, mago, monge, ninja )
Além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

 Exibir a mensagem: "o {tipo} atacou usando {ataque}")

 Aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe

 E no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

 Se mago -> no ataque exibir (usou magia)

 Se guerreiro -> no ataque exibir (usou espada)

 Se monge -> no ataque exibir (usou artes marciais)

 Se ninja -> no ataque exibir (usou shuriken)

Saída
Ao final deve se exibir uma mensagem:

 "o {tipo} atacou usando {ataque}"

 ex: mago atacou usando magia guerreiro atacou usando espada

Tecnologias utilizadas
html

firebase

Formação Lógica de Programação da Dio.me administrado pelo mentor Felipe Aguiar / Tech Lead da DIO
DIO.
