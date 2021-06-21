# Conditional Rendering

Quando queremos alterar um componente para representar o estado da aplicação podemos querer ocultar um ou outro elemento. Para fazermos isso no react só precisamos usar condicionais simples do javascript, como o if, alinhadas a algumas estratégias.

## Element Variables

Podemos armazenar componentes em uma váriável de acordo com uma condicional. Por exemplo de o usuário estiver logado devemos mostrar o botão de logout, como mostrado no `render()` abaixo: 

```JS
render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
}
```

## Inline If with Logical && Operator

É possível contatenar um elemento e uma expressão lógica dentro do JSX, embrulhando ambas com chaves {}, como mostra o exemplo abaixo:

```JS
render() {
  const count = 0;
  return (
    <div>
      { count && <h1>Messages: {count}</h1> }
    </div>
  );
}
```

## Inline If-Else with Conditional Operator

Outra opção para renderizar um elemento usando if-else é utilizar sintaxa de operador ternário entre chaves {}, como mostra o exemplo abaixo:

```JS
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

## Preventing Component from Rendering

As vezes poderemos querer que o componente não seja renderizado. Nesses casos a solução é retornar null em vez do componente. Importante realçar que o compoente não terá seus fluxo de vida alterado, ele continuará normalmente.

```JS
function Button(props) {
  const isRender = this.props.isRender;
  if(!isRender) return null;
  return (
    <button>Button</button>
  );
}

ReactDOM.render(
  <Button />,
  document.getElementById('root')
);
```