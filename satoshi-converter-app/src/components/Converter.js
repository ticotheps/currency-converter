import React from 'react';

class Converter extends React.Component {
    render() {
        return (
            <div className="card card-body">
                <h5>1 USD is equal to</h5>
                <h2>1.87 EUR</h2>
                <p>As of 1/2/2019</p>
                <div className="row">
                    <div className="col-lg-10">
                        <form className="form-inline mb-4">
                            <input className="form-control form-control-lg mx-3"/>                       
                            <select className="form-control form-control-lg">
                                <option>Option 1</option>
                            </select>
                        </form>

                        <form className="form-inline mb-4">
                            <input className="form-control form-control-lg mx-3"/>                       
                            <select className="form-control form-control-lg">
                                <option>Option 1</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Converter;
