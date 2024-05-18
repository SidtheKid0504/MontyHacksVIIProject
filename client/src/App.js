import {Profile} from "./components/Profile/Profile.js";
import {Volunteering} from "./components/Volunteering/Volunteering.js";
import {Scholarships} from "./components/Scholarship/Scholarships.js";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {Profile}
          </Route>
        

          <Route path="/scholarship">
            {Scholarships}
          </Route>

          <Route path="/volunteering">
            {Volunteering}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
