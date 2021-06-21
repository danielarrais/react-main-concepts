import { Component } from 'react';

class ListPeople extends Component {
    getPeople() {
        return this.props.people.map((person) => {
            return <li>{person}</li>;
        });
    }

    render() {
        return (
            <div>
                <ul>{this.getPeople()}</ul>
            </div>
        );
    }
}

class SampleOne extends Component {
    render() {
        const people = ['Daniel', 'Fred', 'Bob', 'John'];

        return (<ListPeople people={people}></ListPeople>);
    }
}

export default SampleOne;