import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
class Select extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        console.log("Render" + this.props.linkStatus[2])
        return (
            <div>
                <div class="dropdown" align="right">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        List Soal </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className={`nav-link ${this.props.linkStatus[0]}`} to="/redio" >radio </Link>
                        <Link className={`nav-link ${this.props.linkStatus[1]}`} to="/cekboks" >checkbox </Link>
                        <Link className={`nav-link ${this.props.linkStatus[2]}`} to="/teksarea" >textarea </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Select;