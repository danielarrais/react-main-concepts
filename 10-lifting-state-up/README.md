# Lifting State Up

Por padrão os dados pecoreem os compoenentes sempre de cima para baixo, doc componentes pais para os filho, porém as vezes precisamos atualizar um componente que está em acima. Para fazermos isso precisamos passar para os componentes filho referência de funções que podem receber os valores esperado. Dentro dessas funções (que ficam no componente pai) pegamos o valor recebido e passamos para o estado, ficando algo parecido com o exemplo abaixo: 

```JS
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value); // chamamos a função passada via properties
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```