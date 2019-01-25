import React, { Component } from 'react';
import $ from 'jquery';
import { PAGE_TITLE, SEARCH_PLACEHOLDER } from '../Constants/Constants';

class App extends Component {
    constructor() {
        super();
        this.state = { list: [], symbol: '', price_usd: '', search: '' };
    }
    updateSearch(event) {
        this.setState({
            search: event.target.value.substr(0,
                20)
        })
    }
    componentDidMount() {
        $.ajax({
            url: "https://api.coinmarketcap.com/v1/ticker/",
            dataType: 'json',
            success: function (response) {
                this.setState({ list: response });
            }.bind(this)
        });
    };
    render() {
        let filterCrypto = this.state.list.filter(
            (crypto) => {
                return crypto.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            <div>
                <h2 className="d-block mt-3 mb-3">{PAGE_TITLE}</h2>

                <div className="form-group">
                    <input type="search"
                        className="form-control pr-4"
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)}
                        placeholder={SEARCH_PLACEHOLDER}>
                    </input>
                </div>
                <div className="row">
                    {filterCrypto.map((crypto) => {
                        return (
                            <div className="col-sm-6 col-md-4 col-xl-3 mb-3" key={crypto.symbol}>
                                <div className="cards">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {crypto.symbol}
                                        </h5>
                                        <h6 className="card-subtitle text-muted">
                                            US$ {crypto.price_usd}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    }
                </div>
            </div>
        )
    }
}
export default App;
