import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class FormTextArea extends Component {
    constructor(props) {
        super(props)

        this.state = {
            soal: '',
            jawab: ''
        }
    }

    handlerSoalChange = (event) => {
        this.setState({
            soal: event.target.value
        })
    }

    handlerJawabAChange = (event) => {
        this.setState({
            jawab: event.target.value
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
                            {this.state.showGw && <p>3. {this.state.soal}</p>}
                            {this.state.showGw && <textarea>{this.state.jawabA}</textarea>}
                        </div>
                    </div>
                    <div className="col-sm-6" align="right">
                        <h1>Soal TextArea</h1>
                        <div class="card-body">
                            <label>Soal</label><br />
                            <input type='text' value={this.state.soal} onChange={this.handlerSoalChange} /><br />
                            <label>Jawab</label><br />
                            <input type='text' value={this.state.jawab} onChange={this.handlerJawabAChange} /><br />
                            <label>Kunci</label><br />
                            <input type='text' value={this.state.kunci} onChange={this.handlerKunciChange} /><br />
                            <label>Score</label><br />
                            <input type='text' value={this.state.score} onChange={this.handlerScoreChange} /><br /><br />
                            <button type="submit" onClick={this.handlerSubmit}>submit</button>
                        </div>

                    </div>
                </div>
            </form>
        );
    }
}

export default withRouter(FormTextArea);