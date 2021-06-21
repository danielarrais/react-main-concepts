# Lists and Keys

Transformar listas de dados em listas de elementos no React é muito simples, basta utilizarmos um map do javascript que já usamos costumeiramente para tranformar listas. Pegamos cada item e montamos nosso JSX como desejado, assim o MAP retornará uma lista de elementos JSX que podemos embutir em outro JSX facilmente.

## Rendering Multiple Components

Para renderizarmos multiplos elementos em um elemento basta motarmos nossa lista - como já mencionado - e colocarmos ela entre chaves em outro JSX, como mostra o exemplo, que imprime um lista de números.

```JS
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

// ...
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

## Basic List Component

Para criar um componente de lista básica basta seguir o exemplo anterior e passa as lista de itens como propriedade do componente.

## Keys

Uma boa pratica para evitar problemas com desempenho no react é usar passar uma propriedade chamada key com um **valor único** para que o React consiga saber com precisão quais itens foram alterado, quando forem alterados.

A key deve ser um string exclusiva para aquele item listado para que ele seja diferenciado de seus irmãos. Essa key ela não é global e só precisa ser unica no escopo da lista. Quando não houver um dado que consiga ser utilizado, **pode-se usar o índice do array**, **porém não é recomendado** porque em caso de reodenamento pode haver problema com desempenho.

```JS
function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

## Embedding map() in JSX

É possível utilizar o map() dentro do próprio JSX entre chaves {}, como mostra o exemplo abaixo:

```JS
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
```