/**
 * Created by smita on 1/4/17.
 */

var React = require("react");

const PNRDetails = React.createClass({

    renderPNRDetails (passengers) {
        return (
            passengers.map(function (passenger, index) {
                return (

                    <div className="routes row">
                        <div className="col-sm-3">{passenger.no} </div>
                        <div className="col-sm-3">{passenger.booking_status}</div>
                        <div className="col-sm-3">{passenger.current_status}</div>
                        <div className="col-sm-3">{passenger.coach_position}</div>
                    </div>
                )
            })
        )
    }
    ,
    render()
    {
        return (
            <div>
                <div className="trainsched-top">
                    <span> Current Status  </span>
                </div>

                <div className="container">
                    <div className="">
                        <div className="route row">
                            <div className="col-sm-3">Chart Prepared</div>
                            <div className="col-sm-3">Train Number</div>
                            <div className="col-sm-3">Train Name</div>
                            <div className="col-sm-3">Date of Journey</div>
                        </div>
                        <div className="routes row">
                            <div className="col-sm-3">{this.props.chartPreparedStatus} </div>
                            <div className="col-sm-3">{this.props.trainNumber} </div>
                            <div className="col-sm-3">{this.props.trainName} </div>
                            <div className="col-sm-3">{this.props.dateofJourney} </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="">
                        <div className="route row">
                            <div className="col-sm-3">PNR Number</div>
                            <div className="col-sm-3">Booking Status</div>
                            <div className="col-sm-3">Current Status</div>
                            <div className="col-sm-3">Coach Position</div>
                        </div>
                        {this.renderPNRDetails(this.props.passengers)}
                    </div>
                </div>
            </div>

        )

    }

});
module.exports = PNRDetails;