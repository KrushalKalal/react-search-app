import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './Product';
import Json from './db.json';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            productData:Json
        }
    }
   render(){
    return(
        <>
          <Header/>
          <Product dataList={this.state.productData}/>
          <Footer year="2022" month="Sept"/>
        </>
       
    )}
}

export default Home;