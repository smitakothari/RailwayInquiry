/**
 * Created by smita on 1/4/17.
 */

var React = require("react");

const TrainScheduleDetails = React.createClass({
    render() {
        return(

            <div className="trainsched-top">
                <span> Current Status : {this.props.position} </span>

            </div>
        )

    }

});
module.exports = TrainScheduleDetails;