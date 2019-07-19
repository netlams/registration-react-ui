import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "self-selected",
      selfSelectedTrials: [{
        id: null,
        value: null,
        notes: null,
        type: null
      }],
      fastTrials: [{
        id: null,
        value: null,
        notes: null,
        type: null
      }]
    };
  }

  setActiveTab(tabName) {
    this.setState({
      activeTab: tabName,
      selfSelectedTrials: this.state.selfSelectedTrials,
      fastTrials: this.state.fastTrials
    });
  }

  pushTrial(trial) {
    trial.type = this.state.activeTab;

    // Push to the active state's array
    if (this.state.activeTab == 'self-selected') {
      let trials = this.state.selfSelectedTrials.slice();
      trial.id = this.state.selfSelectedTrials.length;
      trials.push(trial);

      // set state
      this.setState({
        activeTab: this.state.activeTab,
        selfSelectedTrials: trials,
        fastTrials: this.state.fastTrials
      });
    }
    else {
      let trials = this.state.fastTrials.slice();
      trial.id = this.state.fastTrials.length;
      trials.push(trial);

      // set state
      this.setState({
        activeTab: this.state.activeTab,
        selfSelectedTrials: this.state.selfSelectedTrials,
        fastTrials: trials
      });
    }
  }

  resetActiveTabTrials() {
    // Look at the current active tab and empty/reset the array
    if (this.state.activeTab == 'self-selected') {
      let trials = this.state.selfSelectedTrials.slice();
      // start at 1 (trial starts 1)
      trials.length = 1;

      // Set state
      this.setState({
        activeTab: this.state.activeTab,
        selfSelectedTrials: trials,
        fastTrials: this.state.fastTrials
      });
    }
    else {
      let trials = this.state.fastTrials.slice();
      // start at 1 (trial starts 1)
      trials.length = 1;

      // Set state
      this.setState({
        activeTab: this.state.activeTab,
        selfSelectedTrials: this.state.selfSelectedTrials,
        fastTrials: trials
      });
    }
  }

  render() {
    return (
      <div className="App container">
        <h1 className="display-3">Availity Healthcare Registration</h1>
        <Registration />
      </div>
    );
  }
}

class Registration extends Component {
    constructor(props) {
      super(props);
      this.state = {
        submission: false,
        msg: null
      };
    }

    submitForm() {
      let {submission} = this.state;
      if (submission===false) {
        this.setState({
          submission: true,
          msg: "Registration submitted. Thank you"
        });
      }
    }


   render() {
     let form = (this.state.submission) ?
       this.state.msg : <form id="registation-form">
           <div class="form-group row">
             <label for="inputFirstName" class="col-sm-2 col-form-label">First Name</label>
             <div class="col-sm-10">
               <input type="text" class="form-control" id="inputFirstName"/>
             </div>
           </div>
           <div class="form-group row">
             <label for="inputLastName" class="col-sm-2 col-form-label">Last Name</label>
             <div class="col-sm-10">
               <input type="text" class="form-control" id="inputLastName"/>
             </div>
           </div>
           <div class="form-group row">
             <label for="inputNPINumber" class="col-sm-2 col-form-label">NPI Number</label>
             <div class="col-sm-10">
               <input type="number" class="form-control" id="inputNPINumber"/>
             </div>
           </div>
           <div class="form-group row">
             <label for="inputBusinessAddress" class="col-sm-2 col-form-label">Business Address</label>
             <div class="col-sm-10">
               <input type="text" class="form-control" id="inputBusinessAddress"/>
             </div>
           </div>
           <div class="form-group row">
             <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
             <div class="col-sm-10">
               <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
             </div>
           </div>
           <div class="form-group row">
             <div class="col-sm-2">
               <button type="submit" class="btn btn-primary"
               onClick={() => this.submitForm()}>Sign up</button>
             </div>
             <div class="col-sm-2">
               <button type="reset" class="btn btn-warning" >Reset</button>
             </div>
           </div>
         </form>
       ;

    return (
      <div class="jumbotron">
        {form}
      </div>
      );
  }
}

export default App;
