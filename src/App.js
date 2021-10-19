import "./App.css";
import Home from "./Component/Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/SharedSection/Header/Header";
import Footer from "./Component/SharedSection/Footer/Footer";
import Login from "./Component/Pages/Login/Login";
import SignUp from "./Component/Pages/SignUp/SignUp";
import Notfound from "./Component/SharedSection/404/Notfound";
import AuthProvider from "./Context/AuthProvider";
import Services from "./Component/SharedSection/Services/Services";
import Service from "./Component/SharedSection/Service/Service";
import Form from "./Component/Pages/Form/Form";
import DoctorSay from "./Component/Pages/DoctorSay/DoctorSay";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/Services">
              <Services></Services>
            </Route>
            <Route exact path="/Service/:id">
              <Service></Service>
            </Route>
            <Route exact path="/DoctorSays">
              <DoctorSay></DoctorSay>
            </Route>
            <Route exact path="/Contact">
              <Form></Form>
            </Route>
            <Route exact path="/Login">
              <Login></Login>
            </Route>
            <Route exact path="/SignUp">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
