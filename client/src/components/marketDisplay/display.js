import React, { Component } from "react";
import API from "../../utils/API"

class Display extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        name: "",
        quantity: 0,
        open: 1,
        high: 2,
        low: 3,
        close: 4,
        volume: 5
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.data !== prevProps.data) {
            this.renderDisplay()
        }
    }

    // parse props to update what stock is being displayed, setstate at the end
    renderDisplay() {
        // slice the hour min sec off the time
        let lastRefreshed = this.props.meta["3. Last Refreshed"].slice(0, 10)
        // grab todays stock data index
        let today = this.props.data[lastRefreshed]
        // find average for website purchase
        let average = ((Number(today["2. high"]) + Number(today["3. low"])) / 2).toFixed(4)
        // profit from individual stock, quantity * average for present day value, +/- the current net gain/loss
        for (var i = 0; i < this.props.user.stockData.length; i++) {
            if (this.props.user.stockData[i].name === this.props.meta["2. Symbol"]) {
                var stock = this.props.user.stockData[i]
                var grossProfit = stock.quantity * average
                var profit = grossProfit += stock.purchaseValue
                var fixedProfit = profit.toFixed(4)
            }
        }
        this.setState({
            name: this.props.meta["2. Symbol"],
            profit: fixedProfit,
            average: average,
            open: today["1. open"],
            high: today["2. high"],
            low: today["3. low"],
            close: today["4. close"],
            volume: today["5. volume"]
        })
    }

    setPrice(e, quantity) {
        e.preventDefault()
        let price = (Number(this.state.average) * Number(quantity)).toFixed(4)
        this.setState({ price: price, quantity: quantity })
    }

    vend(e) {
        e.preventDefault()

        let id = this.props.user._id
        let name = this.props.meta["2. Symbol"].toString()
        let vendPrice = this.state.price
        let vendQuantity = this.state.quantity

        let stats = { name, vendPrice, vendQuantity, id }
        API.vendStock(stats).then(res => {
            console.log(res)
            this.props.callback(res.data)
        })
    }

    render() {
        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="col">
                        <h3>User Name: {this.props.user.name}</h3>
                    </div>
                    <div className="col">
                        <h5>Net Worth: {this.props.user.worth.toFixed(4)}$</h5>
                    </div>
                    <div className="col">
                        <h5>Profit/Loss: {this.state.profit}$</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h3>Company Name: {this.state.name}</h3>
                    </div>
                    <div className="col">
                        <h5>Average (high+low/2): {this.state.average}$</h5>
                    </div>
                    <div className="col">
                        <h5>Price: {this.state.price}$</h5>
                    </div>
                    <div className="col">
                        <form onSubmit={e => this.vend(e)}>
                            <input type="number" ref="quantity" onChange={e => this.setPrice(e, this.refs.quantity.value)} />
                            <button>Vend Stocks</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5>Open: {this.state.open}</h5>
                    </div>
                    <div className="col">
                        <h5>High: {this.state.high}</h5>
                    </div>
                    <div className="col">
                        <h5>Low: {this.state.low}</h5>
                    </div>
                    <div className="col">
                        <h5>Close: {this.state.close}</h5>
                    </div>
                    <div className="col">
                        <h5>Volume: {this.state.volume}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Display