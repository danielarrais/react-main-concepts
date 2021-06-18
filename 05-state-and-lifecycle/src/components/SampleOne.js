import { Component } from 'react';

export class MoutingLifeCycle extends Component {
    componentDidMount() {
        console.log('Component mounted');
    }

    render() {
        return (
            <h1>Mouting life lycle component</h1>
        );
    }
}

export class UpdatingLifeCycle extends Component {
    componentDidUpdate() {
        console.log('Component updated');
    }

    render() {
        return (
            <h1>Updating life lycle component</h1>
        );
    }
}

export class UnmountingLifeCycle extends Component {
    componentWillUnmount() {
        console.log('Component unmounted');
    }

    render() {
        return (
            <h1>Unmounting life lycle component</h1>
        );
    }
}

export class SampleOne extends Component {
    render() {
        return (
            <div>
                <MoutingLifeCycle />
                <UpdatingLifeCycle />
                <UnmountingLifeCycle />
            </div>
        );
    }
}