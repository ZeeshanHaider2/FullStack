//This will hold our React Router stuff/things for viewing
import React, { Component } from "react"; //for class based
//import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; //contains set of react router helpers for dom navigation
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
const Dashboard = () => <h2>Fizzit Dashboard</h2>;
const SurveyNew = () => <h2>Fizzit Survey/Blog</h2>;
const Landing = () => <h2>Fizzit Landing Page</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new/" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

//Functional component will be refactored into class based component
// const App = () => {
//   return (
//     <div className="container">
//       <BrowserRouter>
//         <div>
//           <Header />
//           <Route exact path="/" component={Landing} />
//           <Route exact path="/surveys" component={Dashboard} />
//           <Route path="/surveys/new/" component={SurveyNew} />
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// };

export default connect(null, actions)(App);
