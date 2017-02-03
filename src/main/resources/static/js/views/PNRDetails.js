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
                        <div className="col-sm-3">{passengers.no} </div>
                        <div className="col-sm-3">{passengers.booking_status}</div>
                        <div className="col-sm-3">{passengers.current_status}</div>
                        <div className="col-sm-3">{passengers.coach_position}</div>
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