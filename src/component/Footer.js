import React,{Component,Fragment} from 'react';

class Footer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
                 <hr/>
            <center>
                <h3>&copy; Footer {this.props.year} {this.props.month}</h3>
            </center>
            </Fragment>
        )
    }
}

export default Footer;