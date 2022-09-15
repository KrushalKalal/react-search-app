import React,{Component,Fragment} from 'react';
import './Header.css';

class Header extends Component{
    constructor(props){

        super(props)
        
        this.state={
            title: 'React Search App',
            keyword: 'User Text Here'
        }
    }

    handleChange = (event) =>{
        this.setState({
            keyword:event.target.value?event.target.value:'User Text Here'
        })
    }

    

    render(){
        return(
            <Fragment >
              <header>
                <div className='logo'>{this.state.title}</div>
                <center>
                    <input onChange={this.handleChange}/>
                    <div className='keytext'>{this.state.keyword}</div>
                </center>
            </header> 
            </Fragment>
        )
    }
}

export default Header;