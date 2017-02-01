/**
 * Created by smita on 1/4/17.
 */

var React = require("react");

const TrainScheduleDetails = React.createClass({

    renderRoutes (routes) {
        return (
            routes.map(function (route, index) {
                return (
                    <div className="routes row">
                        <div className="col-md-1">{route.station} </div>
                        <div className="col-md-1">{route.distance}</div>
                        <div className="col-md-1">{route.actarr_date}</div>
                        <div className="col-md-1">{route.status}</div>
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
                    <span> Current Status : {this.props.position} </span>
                </div>

                <div className="routeborder">
                    <div className="route row">
                        <div className="col-md-1">Station</div>
                        <div className="col-md-1">kms</div>
                        <div className="col-md-1">Arrives</div>
                        <div className="col-md-1">On Time</div>
                    </div>

                    {this.renderRoutes(this.props.routes)}


                </div>
            </div>

        )

    }

});
module.exports = TrainScheduleDetails;