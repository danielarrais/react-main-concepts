# Handling Events

Manipular eventos no React é bastante simples e um pouco parecido com a manipulação de ventos comum feita no HTML, com algumas ressalvas:

- No JSX os eventos são nomeados em camelCase:

```JS
<button onClick={activateLasers}>
  Onlick Event
</button>
```

No JSX nós passamos a função diretamente para o evento, em vez de uma String:

```JS
handleToggleClick() {
    this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
    }))
}

render() {
    return (
        <button onClick={() => this.handleToggleClick()}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
    );
}
```

Em Javascript os métodos não estão, por padrão, vinculados a classe, logo precisamos amarrá-los manualmente para não obtermos um erro quando ele tentar ser chamada. Para fazer isso basta usar a alternativa a seguir:

```JS
// Fazer o bind no contrutuor do componente
this.handleClick = this.handleClick.bind(this);
```

Há alternativas ao amarramento manual. A primeira delas é usar uma arrow function como foi feito no nosso segundo exemplo:

```JS
<button onClick={() => this.handleToggleClick()}>
    {this.state.isToggleOn ? 'ON' : 'OFF'}
</button>
```

A segunda é colocar a função em um propriedade de classe:

```JS
handleClick = () => {
    console.log('this is:', this);
}

render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
}
```

## Passing Arguments to Event Handlers

Para capturar um evento e passar como argumento para a função basta usar o Function.prototype.bind ou uma arrow function:

```JS
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
