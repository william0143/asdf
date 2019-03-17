import React, { Component } from 'react';

class CurrencyConverter extends Component {
    state = {
        currencies: ['USD','AUD','CAD','GBP','BTC','ETH'],
        base: 'EUR', 
        amount: '0.00',
        convertTo: 'USD',
        result: '0.00',
        date: '',

    };

    handleSelect = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            result: null
        },
        this.calculate
        );
    };

    handleInput = (event) => {
        this.setState({
            amount: event.target.value,
            result: null
        },
        this.calculate
        );
    };

    calculate = () => {
        const amount = this.state.amount;
        if (amount === isNaN) {
            return;
        }
        else {
            var myObject = JSON.parse(`{
                "rates": {
                  "AUD": 1.60,                  
                  "CAD": 1.51,
                  "USD": 1.13,                  
                  "GBP": 0.85,                  
                  "RUB": 73.53,
                  "NZD": 1.66,
                  "BTC": 0.00029,
                  "ETH": 0.0082
                },
                "base": "EUR",
                "date": "2019-03-17"
              }`)           
                const date = myObject.date;
                const result = (myObject.rates[this.state.convertTo] * amount).toFixed(5);
                this.setState({
                    result, 
                    date
                });
        }
    };

    handleSwap = (event) => {
        const base = this.state.base
        const convertTo = this.state.convertTo
        event.preventDefault();
        this.setState({
            convertTo: base, 
            base: convertTo,
            result: null
        },
        this.calculate
        );
    };

    render() {

        const { currencies, base, amount, convertTo, result, date} = this.state

        return (                
                    <div className="col-lg-8 col-sm-8 mx-auto">
                    <div className="divider"></div>
                        <div className="container">
                            <h5>
                                {amount} {base} is equivalent to
                            </h5>
                            <h2>
                                {result === null ? "Calculating..." : result} {convertTo}
                            </h2>
                            <p>As of {date}</p>               
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                    <form className="form-inline mb-3">
                                        <input                                         
                                        type="number"
                                        value={amount}
                                        onChange={this.handleInput}
                                        style={{ width: '110px'}}
                                        className="form-control form-control-lg mx-3"                            
                                        />
                                        <h5>
                                        EUR
                                        </h5>
                                    </form>

                                    <form className="form-inline mb-3">
                                        <input 
                                        disabled={true}
                                        style={{ width: '110px'}}
                                        value={
                                            result === null ? 'Calculating' : result}
                                        className="form-control form-control-lg mx-3"                            
                                        />
                                        <select
                                        name="convertTo"
                                        value={convertTo} 
                                        style={{ width: '90px'}}
                                        onChange={this.handleSelect}
                                        className="form-control form-control-lg mx-3">
                                        {currencies.map(currency => (
                                              <option key={currency} value={currency}>
                                              {currency}
                                              </option>
                                             ))}
                                        </select>
                                    </form>
                                </div>                                
                            </div>
                        </div>
                    </div>           
        );
    }
}

export default CurrencyConverter;
  
