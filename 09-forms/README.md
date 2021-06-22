# Forms

Os formulários React funcionam diferente de um formulário HTML padrão, já que um os formulários padrão matém um estado interno e no react esse estado fica a cargo do componente.

## Controlled Components

No React o estado mutável geralmente é mantido dentro do proprio elemtno, sendo que devemos atualizar o estado do componente manualmente com o setState(). Assim fazemos do react a fonte do estado, dono que realmente importa.

Na prática temos que usar o estado como origem do dado (com o atributo value) e monitorar o elemento para pegar seu conteúdo e atualizarmos o estado, usando os eventos de alteração (onChange()). Abaixo vemos um exemplo: 

```JS
render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}
```

A submição deixar de seguir seu fluxo padrão para ser controlada pelo React e isso fazemos capturando usando o evento onSubmit() e interrompendo o comportamento padrão através do event.preventDefault(); Ficaria assim no código:


```JS
handleSubmit(event) {
    alert('Form submitted!');
    event.preventDefault();
}
```

## The textarea Tag

No HTML o texto da tag textarea é definido pelo conteúdo do seu corpo. No React é usado um atributo, o value, igual com outros inputs padrões. Abaixo uma comparação dos dois jeitos:

```JS
// Pure HTML
<textarea>
  Hello there, this is some text in a text area
</textarea>

// JSX
<textarea value={this.state.value} onChange={this.handleChange} />
```

## The select Tag

A Tag select segue algo parecido com a textarea, já que o select em HTML puto marca os itens selecionado na opções (na tag option) com o atributo vazio selected. No React usamos o atributo value na própria teag select, como mostra o exemplo a seguir. Para as tags de seleção multiplas passamos no value um arrays com os valores selecionados.

```JS
// Pure HTML
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>

// JSX
<select value={this.state.value} onChange={this.handleChange}>
    <option value="grapefruit">Grapefruit</option>
    <option value="lime">Lime</option>
    <option value="coconut">Coconut</option>
    <option value="mango">Mango</option>
</select>

// Multiple select
<select multiple={true} value={['B', 'C']}>
```

## The file input Tag

O campo de upload de arquivos é um campo descontrolado, já que não podemos controlá-lo e o único controle possível é feito pelo usuário. Nesse caso especifico só podemos recuperar o que foi inserido pelo usuário e manipular esse conteúdo com a API padrão do JS.

## Handling Multiple Inputs

Quando há necessidade de lidar com vários campos controlados podemos adiciona um atributos para cada um no estado e usar apenas um handle, tratando cada chamada de acordo com o tipo do campo, como mostra o exemplo:

```JS
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```

No Es6 é possível usar computed property name para atualizar a propriedade correspondente ao nome do campo no estado:

```JS
this.setState({
  [name]: value
});
```