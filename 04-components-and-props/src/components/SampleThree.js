import { Component } from 'react';

function PetAvathar(props) {
    return (
        <div>
            <img src={props.urlAvatar} alt={props.alt} />
        </div>
    )
}
class PetDetails extends Component {
    formatDate(date) {
        return date.toLocaleDateString();
    }

    render() {
        return (
            <div>
                <PetAvathar urlAvatar={this.props.photoUrl} alt={this.props.name} />
                <div>{this.props.text}</div>
                <div>Ele se chama <b>{this.props.name}</b></div>
                <div>{this.formatDate(this.props.date)}</div>
            </div>
        )
    }
}

function SampleThree() {
    return (
        <div>
            <h1>Function and class components with properties</h1>
            <hr />
            <PetDetails date={new Date()} photoUrl="https://placekitten.com/g/64/64" text="Este é meu gato de estimação" name="Thor" />
            <hr />
        </div>
    );
}

export default SampleThree;