import { Component } from 'react';

const products = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isStockOnly: false,
            filterText: ''
        };
    }

    handleFilterTextChange = (filterText) => {
        this.setState({ filterText });
    }

    handleInStockChange = (isStockOnly) => {
        this.setState({ isStockOnly });
    }

    render() {
        return (
            <div>
                <SearchBar onInStockChange={this.handleInStockChange} onFilterTextChange={this.handleFilterTextChange} />
                <ProductTable filterText={this.state.filterText} isStockOnly={this.state.isStockOnly} />
            </div>
        );
    }
}

class SearchBar extends Component {

    onChangeSearchInput = (event) => {
        this.props.onFilterTextChange(event.target.value);
    }

    onChangeisStockOnlyInput = (event) => {
        this.props.onInStockChange(event.target.checked);
    }

    render() {
        return (
            <div>
                <form action="/">
                    <input type="text" placeholder="Search..." onChange={this.onChangeSearchInput} /><br />
                    <input id="checkbox" type="checkbox" onChange={this.onChangeisStockOnlyInput}></input>
                    <label htmlFor="checkbox">Only Show products in stock</label>
                </form>
            </div>
        );
    }
}

class ProductTable extends Component {
    render() {
        const tableRows = [];
        const filterText = this.props.filterText;
        const isStockOnly = this.props.isStockOnly;
        let lastCategory = undefined;

        products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }

            if (isStockOnly && !product.stocked) {
                return;
            }

            if (product.category !== lastCategory) {
                tableRows.push(<ProductCategoryRow category={product.category} />);
            }
            
            tableRows.push(<ProductRow name={product.name} price={product.price} stocked={product.stocked} />);
            lastCategory = product.category;
        })

        return (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {tableRows}
            </table>
        );
    }
}

class ProductCategoryRow extends Component {
    render() {
        return (
            <tr>
                <td colSpan="2"><b>{this.props.category}</b></td>
            </tr>
        );
    }
}

class ProductRow extends Component {
    render() {
        const style = !this.props.stocked ? { color: "red" } : {};

        return (
            <tr>
                <td style={style}>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>
        );
    }
}

class SampleOne extends Component {
    render() {
        return (
            <div>
                <FilterableProductTable />
            </div>
        );
    }
}

export default SampleOne;