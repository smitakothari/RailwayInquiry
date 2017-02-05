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
                        <div className="col-sm-3">{route.station} </div>
                        <div className="col-sm-3">{route.distance}</div>
                        <div className="col-sm-3">{route.actarr_date}</div>
                        <div className="col-sm-3">{route.status}</div>
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
                    {this.props.responseCode == 404?
                    <div className="container">
                        Oops! Something is wrong, it seems Railway is under maintainence!
                        Don't worry try text PNR to 139
                    </div>
                    :
                    this.props.responseCode == 510?
                    <div className="container">
                        Train not scheduled to run on the given date
                    </div>
                    :
                        this.props.responseCode == 200?
                <div>
                <div className="trainsched-top">
                    <span> Current Status : {this.props.position} </span>
                </div>

                <div className="container">
                    <div className="">
                        <div className="route row">
                            <div className="col-sm-3">Station</div>
                            <div className="col-sm-3">kms</div>
                            <div className="col-sm-3">Arrives</div>
                            <div className="col-sm-3">On Time</div>
                        </div>
                        {this.renderRoutes(this.props.routes)}
                    </div>
                </div>
                    </div>
                            :
                            <div> No Data found for the Train Number Entered</div>
                        }
            </div>

        )

    }

});
module.exports = TrainScheduleDetails;