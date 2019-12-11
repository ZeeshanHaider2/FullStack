//This will hold our React Router stuff/things for viewing
import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; //contains set of react router helpers for dom navigation
//We have created a functional component that returns a little bit of JSX

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Fizzit Dashboard</h2>;
const SurveyNew = () => <h2>Fizzit Survey/Blog</h2>;
const Landing = () => <h2>Fizzit Landing Page</h2>;

const App = () => {
  return (
    <div>
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
};

export default App;
