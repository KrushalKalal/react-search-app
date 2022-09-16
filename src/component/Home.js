import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './Product';
import Json from './db.json';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            productData:Json,
            filterData:Json
        }
    }

    fiterProduct = (keyword) => {
       let output = this.state.productData.filter((data) => {
          return(data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
          
       })
       this.setState({filterData:output})
    }

    render(){
    return(
        <>
          <Header searchData = {(data) => {this.fiterProduct(data)}}/>
          <Product dataList={this.state.filterData}/>
          <Footer year="2022" month="Sept"/>
        </>
       
    )}
}

export default Home;