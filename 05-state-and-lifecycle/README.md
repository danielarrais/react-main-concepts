# Component lifecycle
Todo componente react tem um cliclo de vida, agrupado por estágios, onde em cada um há métodos onde podemos usar para executar ações especificas ou para obter informações sobre o componente. Os estágios e seus métodos são descritos a seguir.

## Mouting 
Etapa da contrução do componente. Nessa etapa os seguintes métodos são executados (seguindo a mesma ordem):

- constructor(): criar uma instância do componente, é aqui que se inializa o estado do componente e é onde as propriedades são recebidas;
- getDerivedStateFromProps();
- render();
- componentDidMount(): é invocado após a montagem do elemento no DOM. Bom lugar para carregar dados remotos (de uma API por exemplo);

## Updating
Etapa de atualização do componente. Nesta etapa os seguintes métodos são executados:

- getDerivedStateFromProps()
- shouldComponentUpdate(): usado para inpedir a renderização de um componente e ele só é chamado na atualização do componente ou quando o update é focçado pelo forceUpdate(). Não é aconselhável utilizá-lo, em vez dele o idal é utilizar um PureComponent;
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate(): é invocado após após a atualização do componente;

## Unmounting

- componentWillUnmount()

# Component state

Cada componente react possui um estado, que é onde podemos colocar informações que serão manipulada ao longo do ciclo de vida dele. Para criar um estado com as informações que precisamos para seguir o exemplo abaixo:

```JS
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
}
```

O estado e suas propriedades podem ser acessadas diretamente na vaiárivel de classe `this.state`, porém vale ressaltar que sua alteração não pode acontecer de forma direta, apena por meio do método `setState({})`. Na verdade não acontece uma atualização do estado e sim a criação de um novo estado, que substitui o antigo. No método setState() você passa o JSON apenas com as alterações que vão mudar, aí o React mergeia as novas informações com a antiga gerando um novo estado. Veja o exemplo:

```JS
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  changeDate() {
    this.setState({
      date: new Date()
    });
  }
}
```