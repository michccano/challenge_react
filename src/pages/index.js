import React , { Component } from 'react';

import { Layout, SEO,Product } from '../components';
import products from '../data/products.json';

class  IndexPage extends Component {
  
    
   constructor(props) {

    super(props);

    this.categories = [];


    for(var i=0; i<products.length; i++){
      if(!this.categories.includes(products[i].category)){
        this.categories.push(products[i].category);
      }
    }

    this.state = {cat:[],searchValue:"",selectedCat:"pants"};
    this.search = this.search.bind(this);

  }

myChangeHandler = (event) => {
    this.setState({searchValue: event.target.value});
  }

categoryHandler = (event) => {
    this.setState({selectedCat: event.target.value});
  }

  search(){
    alert(this.state.searchValue);
  }


  componentDidMount(){

   
  }


render(){

  let currentComponent = this;


  return (
    <Layout>
      <SEO title="Home" />


<ul class="flex">

  <li class="mr-6">
  <form class="w-full max-w-sm">
  <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" onChange={this.myChangeHandler } type="text" placeholder="Search" aria-label="Full name"/>
  
  
  </div>
</form>
  </li>

  <li class="mr-6">
  <div class="inline-block relative w-64">
  Category:
  <select onChange={this.categoryHandler} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
           {this.categories.map((category) => (

            <option>{category}</option>
                 
          ))}
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>

</div>  </li>
</ul>

      <div className="py-12 text-gray-800">
       <div class="flex flex-wrap">

  {products.filter(name => name.name.includes(this.state.searchValue) && name.category==this.state.selectedCat).map(product1 => (
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">

            <Product title={product1.name} img={product1.image} description={product1.description} category={product1.category} price={product1.price}  ></Product>
            </div>

      ))}
          

            
     
     
</div>
      </div>
    </Layout>
  );
}}


export default IndexPage;  