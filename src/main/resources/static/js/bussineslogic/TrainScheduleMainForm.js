/**
 * Created by sjain on 1/2/2017.
 */

var React = require("react");

var TrainScheduleView = require("../views/TrainScheduleView");
var TrainSheduleDetails = require("../views/TrainSheduleDetails");


const OBJECT_PROP_DEFAULTS = {
    defaultValues: {
        TrainNumber: "",
        TrainDateOfJourney: "",
        searchRes:[],
    },

    dynamicContent: {
        TrainNumberLabel: "Train Number",
        TrainDateOfJourneyLabel: "Date of Journey",
    }
};

const TrainScheduleMainForm = React.createClass({

    getDefaultProps(){
      return{
          defaultValues:OBJECT_PROP_DEFAULTS.defaultValues,
          dynamicContent :OBJECT_PROP_DEFAULTS.dynamicContent
      }
    },

    getInitialState(){
      const  {TrainNumber,TrainDateOfJourney}  =
          this.preserveObjectPropDefaults("defaultValues");
      return{
          TrainNumber,TrainDateOfJourney
      };
    },

    preserveObjectPropDefaults(key) {
        const obj = Object.assign({}, OBJECT_PROP_DEFAULTS[key], this.props[key]);

        // No deep clone utility available. Cloning all child objects of parent, 1 level deep only.
        for (const prop in obj) {
            if (obj[prop] instanceof Object) {
                obj[prop] = Object.assign({}, OBJECT_PROP_DEFAULTS[key][prop], this.props[key][prop]);
            }
        }

        return obj;
    },

    OnChangeTrainDateOfJourney(e){
        e.preventDefault();
        this.setState({TrainDateOfJourney: e.target.value});
    },

    OnChangeTrainNumber(e){
        e.preventDefault();
        this.setState({TrainNumber: e.target.value});
    },

    onSubmitHandler(e){
      e.preventDefault();
        const formDataFields = JSON.stringify({
            "TrainNumber": this.state.TrainNumber,
            "TrainDateOfJourney":this.state.TrainDateOfJourney
        }) ;


        // const url = `http://api.railwayapi.com/live/train/{formDataFields.TrainNumber}/doj/{formDataFields.TrainDateOfJourney}/apikey/{myapikey}/`;
const url = "/trainlivestatus/"+ this.state.TrainNumber;
        self= this;
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                console.log('url : ' + url);
                console.log('data : ' + data);
                self.setState({searchRes:data});
            },
            error: function (data) {
                console.log('failed to register');
                console.log('data : ' + data);

            }
        })
    },

    render(){
        const dynamicContent = this.preserveObjectPropDefaults("dynamicContent");
        return(
            <div>
            <TrainScheduleView
                TrainNumber = {this.state.TrainNumber}
                TrainDateOfJourney = {this.state.TrainDateOfJourney}
                dynamicContent={dynamicContent}
                onChangeTrainNumber ={this.OnChangeTrainNumber}
                onChangeTrainDateOfJourney ={this.OnChangeTrainDateOfJourney}
                onSubmit={this.onSubmitHandler}
                buttonText="Search"
                formSubmit ="value"
            ></TrainScheduleView>

        {this.state.searchRes ?
            <TrainSheduleDetails position = {this.state.searchRes.position}></TrainSheduleDetails>:null
        }
        </div>
        )
    }
});
module.exports = TrainScheduleMainForm;