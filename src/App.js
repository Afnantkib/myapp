import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {
constructor(){
super();
this.state = {

  products: [
      {
          price: 999,
          title: 'Phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          id: 1
      },
      {
          price: 652,
          title: 'Laptop',
          qty: 3,
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          id: 2
      },
      {
          price: 999,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          id: 3
      }




  ]

}




}
handleIncreaseQty=(product)=>{
  const {products}=this.state;
  const idx=products.indexOf(product);
  products[idx].qty+=1;
  this.setState({
    products
  })
  
  }
  handleDecreaseQty=(product)=>{
  const {products}=this.state;
  const idx=products.indexOf(product);
  if(products[idx].qty===0){
    return;
  }
  products[idx].qty-=1;
  this.setState({
    products
  })
  
  }
  handleDeleteProduct=(id)=>{
const {products}=this.state;
const items=products.filter((product)=>product.id!==id);
this.setState({
  products:items
})





  }
  getCartCount(){
    const {products}=this.state;
   let count=0;
   products.forEach((product)=>{
count+=product.qty
   })
return count;
  }
getCartTotal(){
  const {products}=this.state;
  let total=0;
  products.forEach((product)=>{
total+= product.qty*product.price;
  })

  return total;
}


render(){
const {products}=this.state;
  return (
  
    <div className="App">
        <Navbar count={this.getCartCount()}/>
      <h1>Cart</h1>
      <Cart
       products={products}
        handleIncreaseQty={this.handleIncreaseQty}
        handleDecreaseQty={this.handleDecreaseQty}
        handleDeleteProduct={this.handleDeleteProduct}
      
      />

      <div style={{fontSize:20,padding:10}}>TOTAL:{this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
