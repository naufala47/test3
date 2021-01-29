import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormCheckBox from './component/FormCheckBox';
import FormRadio from './component/FormRadio';
import FormTextArea from './component/FormTextArea';
import Select from './component/Select';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = { linkStatus: [] }
  }

  updateLinkStatus = (status) => {
    this.setState({ linkStatus: status })


  }

  render() {
    return (
      <Router>
        <div>
          <Select linkStatus={this.state.linkStatus} />
          <Switch>
            <Route path="/redio">
              <FormRadio updateLinkStatus={this.updateLinkStatus} />
            </Route>
            <Route path="/cekboks">
              <FormCheckBox updateLinkStatus={this.updateLinkStatus} />
            </Route>
            <Route path="/teksarea">
              <FormTextArea updateLinkStatus={this.updateLinkStatus} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
