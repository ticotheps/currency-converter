import React from 'react';

class Converter extends React.Component {

    state = {
        currencies: ['USD', 'AUD', 'SGD', 'PHP', 'EUR'],
        base: 'USD',
        amount: '',
        convertTo: 'EUR',
        result: '',
        date: ''
    }

    handleSelect = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleInput = (e) => {
        this.setState({
            amount: e.target.value
        });
    }

    render() {
        const { currencies, base, amount, convertTo, result, date } = this.state;
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card card-body">
                            <h5>{amount} {base} is equal to</h5>
                            <h2>{result} {convertTo}</h2>
                            <p>As of {date}</p>
                            <div className="row">
                                <div className="col-lg-10 col-md-10">
                                    <form className="form-inline mb-4">
                                        <input 
                                            type="number"
                                            onChange={this.handleInput}
                                            value={amount}
                                            className="form-control form-control-lg mx-3"
                                        />                       
                                        <select 
                                            name="base"
                                            value={base}
                                            onChange={this.handleSelect}
                                            className="form-control form-control-lg"
                                        >
                                            {currencies.map(currency =>
                                                <option key={currency} value={currency}>
                                                    {currency}
                                                </option>
                                            )}
                                        </select>
                                    </form>
                                    <form className="form-inline mb-4">
                                        <input 
                                            type="number"
                                            className="form-control form-control-lg mx-3"/>                       
                                        <select 
                                            name="convertTo"
                                            value={convertTo}
                                            onChange={this.handleSelect}
                                            className="form-control form-control-lg"
                                        >
                                            {currencies.map(currency =>
                                                <option key={currency} value={currency}>
                                                    {currency}
                                                </option>
                                            )}
                                        </select>
                                    </form>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 align-self-center">
                                    <h1 className="convert-btn">&#8595;&#8593;</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Converter;
