import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class FormCheckBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            soal: '',
            jawabA: '',
            jawabB: '',
            jawabC: '',
            jawabD: '',
            kunci: '',
            score: ''
        }
    }

    handlerSoalChange = (event) => {
        this.setState({
            soal: event.target.value
        })
    }

    handlerJawabAChange = (event) => {
        this.setState({
            jawabA: event.target.value
        })
    }

    handlerJawabBChange = (event) => {
        this.setState({
            jawabB: event.target.value
        })
    }

    handlerJawabCChange = (event) => {
        this.setState({
            jawabC: event.target.value
        })
    }

    handlerJawabDChange = (event) => {
        this.setState({
            jawabD: event.target.value
        })
    }

    handlerKunciChange = (event) => {
        this.setState({
            kunci: event.target.value
        })
    }

    handlerScoreChange = (event) => {
        this.setState({
            score: event.target.value
        })
    }

    handlerSubmit = event => {
        event.preventDefault()
        this.setState({
            showGw: true
        });

    }

    render() {
        return (
            <form>
                <div className="row">
                    <div className="col-sm-6">
                        <div class="card-body">
                            {this.state.showGw && <p>2. {this.state.soal}</p>}
                            {this.state.showGw && <a><input type="checkbox" />{this.state.jawabA}</a>}
                            {this.state.showGw && <a><input type="checkbox" />{this.state.jawabC}</a>}<br />
                            {this.state.showGw && <a><input type="checkbox" />{this.state.jawabB}</a>}
                            {this.state.showGw && <a><input type="checkbox" />{this.state.jawabD}</a>}
                        </div>
                    </div>
                    <div className="col-sm-6" align="right">
                        <h1>Soal CheckBox</h1>
                        <div class="card-body">
                            <label>Soal</label><br />
                            <input type='text' value={this.state.soal} onChange={this.handlerSoalChange} /><br />
                            <label>Jawab A</label><br />
                            <input type='text' value={this.state.jawabA} onChange={this.handlerJawabAChange} /><br />
                            <label>Jawab B</label><br />
                            <input type='text' value={this.state.jawabB} onChange={this.handlerJawabBChange} /><br />
                            <label>Jawab C</label><br />
                            <input type='text' value={this.state.jawabC} onChange={this.handlerJawabCChange} /><br />
                            <label>Jawab D</label><br />
                            <input type='text' value={this.state.jawabD} onChange={this.handlerJawabDChange} /><br />
                            <label>Kunci</label><br />
                            <input type='text' value={this.state.kunci} onChange={this.handlerKunciChange} /><br />

                            <label>Score</label><br />
                            <input type='text' value={this.state.score} onChange={this.handlerScoreChange} /><br /><br /><br />
                            <button type="submit" onClick={this.handlerSubmit}>submit</button>
                        </div>

                    </div>
                </div>
            </form>
        );
    }
}

export default withRouter(FormCheckBox);