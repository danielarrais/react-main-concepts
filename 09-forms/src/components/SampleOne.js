import { Component } from 'react';

class PersonForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            person: {}
        };
    }

    onSubmitForm = (event) => {
        console.log("Dados submetidos: ", this.state.person)
        event.preventDefault();
    }

    onInputChange = (event) => {
        const input = event.target;
        const person = this.state.person;

        person[input.name] = input.value

        this.setState({
            person: person
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <div>
                    <label htmlFor="input#1">Nome: </label><br />
                    <input id="input#1" type="text" name="name" value={this.state.person.name} onChange={this.onInputChange} />
                </div>

                <div>
                    <label htmlFor="input#2">Ultimo nome: </label><br />
                    <input id="input#2" type="text" name="lastName" value={this.state.person.lastName} onChange={this.onInputChange} />
                </div>

                <div>
                    <label htmlFor="input#3">Telefone:</label><br />
                    <input id="input#3" type="text" name="fone" value={this.state.person.fone} onChange={this.onInputChange} />
                </div>

                <div>
                    <label htmlFor="input#4">Genero: </label><br />
                    <select id="input#4" name="gener" value={this.state.person.gener} onChange={this.onInputChange}>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="input#5">Foto: </label><br />
                    <input id="input#5" type="file" name="avatar" value={this.state.person.avatar} onChange={this.onInputChange} />
                </div>

                <div>
                    <label htmlFor="input#6">Sobre você: </label><br />
                    <textarea id="input#6" name="about" cols="30" rows="10" value={this.state.person.value} onChange={this.onInputChange} />
                </div>

                <br />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

function SampleOne() {
    return <PersonForm />
}

export default SampleOne;