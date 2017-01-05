/**
 * Created by sjain on 1/2/2017.
 */

var React = require("react");
const LabelInputText = React.createClass({

    render(){

        return(
            <div className="row">
                <label id="address-label" htmlFor="address-label"
                       className=""
                >{this.props.label}
                </label>
                <input
                    type="text"
                    placeholder={this.props.placeHolderText}
                    className=""
                    onChange={this.props.onChange}
                ></input>

            </div>

        )
    }

}) ;

module.exports = LabelInputText;