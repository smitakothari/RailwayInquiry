/**
 * Created by sjain on 1/2/2017.
 */

var React = require("react");

var TrainShedule = require("./common/LabelInputText");



const TrainScheduleView = React.createClass({

    formSubmit(e){
        this.props.onSubmit(e);
    },


    render(){
        return (
            <div className="container">
                <form className="" onSubmit={this.formSubmit}>

                    <TrainShedule label={this.props.dynamicContent.TrainNumberLabel}
                                  placeHolderText={this.props.TrainNumber}
                                  onChange={this.props.onChangeTrainNumber}
                    >
                    </TrainShedule>

              <TrainShedule label={this.props.dynamicContent.JourneyDateLabel}
                                  placeHolderText={this.props.TrainDateOfJourney}
                                  onChange={this.props.onChangeTrainDateOfJourney}
                    >
                    </TrainShedule>

                    <button type="submit"
                            data-submit>{this.props.buttonText}</button>

                </form>
            </div>
        )
    }
});

module.exports = TrainScheduleView;
