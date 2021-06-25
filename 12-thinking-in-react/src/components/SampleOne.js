import { Component } from 'react';

class FilterableProductTable extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable />
            </div>
        );
    }
}

class SearchBar extends Component {
    render() {
        return (
            <div>
                <form action="/">
                    <input type="text" placeholder="Search..." /><br />
                    <input type="checkbox">Only Show products in stock</input>
                </form>
            </div>
        );
    }
}

class ProductTable extends Component {
    render() {
        return (
            <div>
                <ProductCategoryRow />
                <ProductRow />
            </div>
        );
    }
}

class ProductCategoryRow extends Component {
    render() {
        return <div></div>;
    }
}

class ProductRow extends Component {
    render() {
        return <div></div>;
    }
}

class SampleOne extends Component {
    render() {
        return <FilterableProductTable />;
    }
}

export default SampleOne;