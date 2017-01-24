/**
 * Created by smita on 1/16/17.
 */

var React = require("react");
var Link = require("react-router").Link;

const Header = React.createClass({

    render(){
        return(
            <div>
                <ul className="nav nav-pills nav-top">

                    <li role="presentation"><Link to={'trainStatus'}>Train Running Status</Link></li>
                    <li role="presentation"><Link to={'pnr'}>PNR Status</Link></li>
                    <li role="presentation"><a href="#">About Us</a></li>
                </ul>

                {this.props.children}
            </div>
        )
    }
});
module.exports=Header;





