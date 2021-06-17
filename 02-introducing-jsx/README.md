# 02 - Introdução ao JSX

JSX é uma linguegem usada no React para descrevermos como o componente será apresentado para o usuáro. Ele é estranho, pois parece HTML mas não é, mas é melhor que ele porque você pode escrever HTML nele e pode usar todo o poder do javascript em conjunto.

O principal motivo do React utilizar JSX (apesar que você não é obrigado a usá-lo) é facilitar o isolamento do compoente, já que colocamos seu comportamento e sua visualização em um único lugar.

Como mencionado você não é obrigado a utilizar JSX, porém ele é mais simples que a outra forma, onde você deve utilizar o React para construir cada elemento, como mostrado abaixo:

```JS
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
);
```

```JS
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);
```

No JSX é possível incorporar JS fazendo o uso de {_JS}, assim podemos chamar funções e váriáveis, fazer uso de condicionais e muito mais. Abaixo alguns exemplos desse incorporamento. 

```JS
// incoporação de variável
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>; // <h1>Hello, Josh Perez</h1>
```

```JS
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

// incoporação de funções
const element = (
  <h1> Hello, {formatName(user)}! </h1> // <h1>Hello, Harper Perez</h1>
);
```

É interessante mensionar que todo o código JSX é convertido durante a compilação em chamadas de funções JS (`React.createElement()`), assim podemos armazenar um código JSX em uma váriável como armazenameos a referência de uma função, podendo retorná-lo em uma função, colocá-lo em uma lista ou em uma variável, como mostra os exemplos.

```JS
const element = <img src={user.avatarUrl} />;
```

```JS
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

```JS
```

Após ser compilado pelo babel é isso que acontece, ele se tranforma em chamadas da função do React responsável por contruir os elementos, que inicialmente se tornam um objeto JSON, como mostrado no último exemplo.

```JS
// JSX
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```JS
// Compilado
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

```JS
// Representação simplificada do objeto gerado
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```











