import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
               <input type="text" class="form-control" id="inputFirstName" />
             </div>
           </div>
           <div class="form-group row">
             <label for="inputLastName" class="col-sm-2 col-form-label">Last Name</label>
             <div class="col-sm-10">
               <input type="text" class="form-control" id="inputLastName" />
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
