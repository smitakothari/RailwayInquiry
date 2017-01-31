var React = require("react");
var ReactDOM = require('react-dom');
var TrainScheduleMainForm = require('./bussineslogic/TrainScheduleMainForm');
var PNRStatusMainForm = require('./bussineslogic/PNRStatusMainForm');
var Header = require('./Header');

var ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    BrowserHistory = ReactRouter.browserHistory;


ReactDOM.render(
    <Router history={BrowserHistory}>
        <Route path="/" component={Header}>
            <Route path="trainStatus" component={TrainScheduleMainForm}></Route>
            <Route path="pnr" component={PNRStatusMainForm}></Route>
        </Route>
    </Router>
    , document.getElementById("row")
);