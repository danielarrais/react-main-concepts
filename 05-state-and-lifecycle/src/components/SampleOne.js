import { Component } from 'react';

class MoutingLifeCycle extends Component {
    componentDidMount() {
        console.log('Component mounted');
    }

    render() {
        return (
            <h1>Mouting life lycle component</h1>
        );
    }
}

class UpdatingLifeCycle extends Component {
    componentDidUpdate() {
        console.log('Component updated');
    }

    render() {
        return (
            <h1>Updating life lycle component</h1>
        );
    }
}

class UnmountingLifeCycle extends Component {
    componentWillUnmount() {
        console.log('Component unmounted');
    }

    render() {
        return (
            <h1>Unmounting life lycle component</h1>
        );
    }
}

class SampleOne extends Component {
    render() {
        return (
            <div>
                <h1>Adding Lifecycle Methods to a Class</h1>
                <hr />
                <MoutingLifeCycle />
                <UpdatingLifeCycle />
                <UnmountingLifeCycle />
                <hr />
            </div>
        );
    }
}

export default SampleOne;