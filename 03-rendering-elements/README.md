# 03 - Rendering Elements
Os elementos são os menores blocos de uma aplicação React, e eles representam o que deve ser exibido para o usuário. Quem renderiza esses elementos na tela é o React DOM, que é uma espécie de DOM Virtual, que no fim é quem atualiza o DOM real do navegador. O elementos do react exigem menos recurso para renderizar que os elementos do DOM Real.

## Rendering an Element into the DOM
Para renderizar um elemento react é necessário chamar o método React.render() passando o elemento e o elemento raiz, ficando como está no exemplo a seguir. Geralmente uma aplicação React só a um nó de redenerização, porém pode haver mais de um.

```JS
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
## Updating the Rendered Element
Um elemento React ele é imutável, uma vez criado, ele e seus filho não podem ser alterados. Para ver realizar uma modificação no elemento ele deve ser recriado com a modificação esperada e deve passado para o React DOM; é importante notar que o React só atualiza o necessário, por exemplo em um elemento hode há um relógio que altera a hora a cada um segundo é realizado uma atualização do elemento a cada 1s, porém a renderização só é refeita no elemento onde há o o texto do relógio, todos o resto do DOM continua como estava, assim poupando recursos da máquina.