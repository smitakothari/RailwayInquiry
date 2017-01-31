/**
 * Created by smita on 1/16/17.
 */

/**
 * Created by sjain on 1/2/2017.
 */

var React = require("react");

var TrainScheduleView = require("../views/TrainScheduleView");
var PNRStatusView = require("../views/PNRStatusView");
var TrainSheduleDetails = require("../views/TrainSheduleDetails");


const OBJECT_PROP_DEFAULTS = {
    defaultValues: {
        TrainNumber: "",
        TrainDateOfJourney: "",
        PNRNumber:"",
        searchRes:[],
    },

    dynamicContent: {
        TrainNumberLabel: "Train Number",
        TrainDateOfJourneyLabel: "Date of Journey",
        PNRNumberLabel: "PNR Number",
    }
};

const PNRStatusMainForm = React.createClass({

    getDefaultProps(){
        return{
            defaultValues:OBJECT_PROP_DEFAULTS.defaultValues,
            dynamicContent :OBJECT_PROP_DEFAULTS.dynamicContent
        }
    },

    getInitialState(){
        const  {TrainNumber,TrainDateOfJourney, PNRNumber}  =
            this.preserveObjectPropDefaults("defaultValues");
        return{
            TrainNumber,TrainDateOfJourney,PNRNumber
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

    OnChangePNRNumber(e){
        e.preventDefault();
        this.setState({PNRNumber: e.target.value});
    },

    onSubmitHandler(e){
        e.preventDefault();
        const formDataFields = JSON.stringify({
            "TrainNumber": this.state.PNRNumber,
            "TrainDateOfJourney":this.state.TrainDateOfJourney
        }) ;


        // const url = `http://api.railwayapi.com/live/train/{formDataFields.TrainNumber}/doj/{formDataFields.TrainDateOfJourney}/apikey/{myapikey}/`;
        const url = "/pnr/"+ this.state.PNRNumber;
        self= this;
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            Accept: 'application/json',
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
                {/*<TrainScheduleView*/}
                    {/*TrainNumber = {this.state.TrainNumber}*/}
                    {/*TrainDateOfJourney = {this.state.TrainDateOfJourney}*/}
                    {/*dynamicContent={dynamicContent}*/}
                    {/*onChangeTrainNumber ={this.OnChangeTrainNumber}*/}
                    {/*onChangeTrainDateOfJourney ={this.OnChangeTrainDateOfJourney}*/}
                    {/*onSubmit={this.onSubmitHandler}*/}
                    {/*buttonText="Search"*/}
                    {/*formSubmit ="value"*/}
                {/*></TrainScheduleView>*/}

                <PNRStatusView
                PNRNumber = {this.state.PNRNumber}
                dynamicContent={dynamicContent}
                OnChangePNRNumber = {this.OnChangePNRNumber}
                buttonText="Search"
                ></PNRStatusView>

                {this.state.searchRes ?
                    <TrainSheduleDetails position = {this.state.searchRes.position}></TrainSheduleDetails>:null
                }
            </div>
        )
    }
});
module.exports = PNRStatusMainForm;
