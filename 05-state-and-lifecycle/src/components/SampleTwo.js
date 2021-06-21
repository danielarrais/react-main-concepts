import { Component } from 'react';

class ChangeState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'Estado criado!'
        };

        setTimeout(() => this.changeState());
    }

    componentDidMount() {
        console.log('Component mounted');
    }

    changeState(state) {
        this.setState({
            status: 'Estado alterado!'
        });
    }

    render() {
        return (
            <h1>Changing local state of class component</h1>
        );
    }
}

class SampleTwo extends Component {
    render() {
        return (
            <div>
                <h1>Adding Local State to a Class</h1>
                <hr />
                <ChangeState />
                <hr />
            </div>
        );
    }
}

export default SampleTwo;