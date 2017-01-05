var React = require("react");
var ReactDOM = require('react-dom');
var TrainScheduleMainForm = require('./bussineslogic/TrainScheduleMainForm');


const app = React.createClass({
    render () {
        return (
            <TrainScheduleMainForm></TrainScheduleMainForm>
        );
    }
});
var element = React.createElement(app);
ReactDOM.render(element, document.getElementById("row"));