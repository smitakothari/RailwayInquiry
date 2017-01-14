/**
 * Created by smita on 1/8/17.
 */

var React = require("react");

var PNRStatus = require("./common/LabelInputText");



const PNRStatusView = React.createClass({

    formSubmit(e){
        this.props.onSubmit(e);
    },


    render(){
        return (
            <div className="container">
                <form className="" onSubmit={this.formSubmit}>

                    <PNRStatus label={this.props.dynamicContent.PNRNumberLabel}
                                  placeHolderText={this.props.PNRNumber}
                                  onChange={this.props.OnChangePNRNumber}
                    >
                    </PNRStatus>

                    <button type="submit"
                            data-submit>{this.props.buttonText}</button>

                </form>
            </div>
        )
    }
});

module.exports = PNRStatusView;

