import { Component } from 'react';

class SampleJSXOne extends Component {
    render() {
        const name = "Daniel Arrais de Carvalho";
        const job = "Software Engineer";
        const age = 23;

        const title = <h1>{name} - {age}</h1>
        const description = <h2>{job}</h2>

        return (
            <div>
                <h2>Embedding Expressions in JSX</h2>
                <hr />
                {title}
                {description}
                <hr />
            </div>
        );
    }
}

export default SampleJSXOne;