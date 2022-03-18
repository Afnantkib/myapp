import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
// import { Firestore as firestore, getFirestore } from 'firebase/compat/firestore';
class App extends React.Component {
constructor(){
super();
this.state = {

  products: [],
  loading:true

}

}
componentDidMount(){
  // Just reading from firebase
// firebase
// .firestore()
// .collection("products")
// .get()
// .then((snapshot)=>{
// const products=snapshot.docs.map((doc)=>{
//   const data=doc.data();
//   data['id']=doc.id;
//   return doc.data();
// })

// this.setState({
//   products,
//   loading:false
// })


// })


//********* for realtime updation/ adding a listener */ 

firebase
.firestore()
.collection("products")
.onSnapshot((snapshot)=>{
const products=snapshot.docs.map((doc)=>{
    const data=doc.data();
  data['id']=doc.id;
  return data;
  
})

this.setState({
  products,
loading:false
})



})





}









handleIncreaseQty=(product)=>{
  //*********** This is cllient sided logic */

  // const {products}=this.state;
  // const idx=products.indexOf(product);
  // products[idx].qty+=1;
  // this.setState({
  //   products
  // })     

// // //*********************** This is db sided logic */

const docRef=firebase.firestore().collection("products").doc(product.id);
docRef.update({
  qty:product.qty+1
})
.then(()=>{
    console.log('Updated successfully')
})
.catch((e)=>{
  console.log(e);
})






  
  }




  handleDecreaseQty=(product)=>{
     const {products}=this.state;
  const idx=products.indexOf(product);
  if(products[idx].qty===0){
    return;
  }
  // products[idx].qty-=1;
  // this.setState({
  //   products
  // })
  const docRef=firebase.firestore().collection("products").doc(product.id);
  docRef.update({
  qty:product.qty-1



  }).then(()=>{
    console.log('Updated successfully')
})
.catch((e)=>{
  console.log(e);
})






  }
  handleDeleteProduct=(product)=>{
// const {products}=this.state;
// const items=products.filter((product)=>product.id!==id);
// this.setState({
//   products:items
// })

const docRef=firebase.firestore().collection("products").doc(product.id);
docRef.delete().then(()=>{
  console.log("Deleted")
})
.catch((e)=>{
  console.log(e);
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
addProduct=()=>{
  firebase
  .firestore()
  .collection("products")
  .add({
    img:'',
    title:'Google',
    price:234,
    qty:3
  }).then((docRef)=>{
console.log("Product has been added ",docRef )
  }).catch((e)=>{
    console.log(e);
  })
}

render(){
const {products,loading}=this.state;

  return (
  
    <div className="App">
        <Navbar count={this.getCartCount()}/>
        <button onClick={this.addProduct} style={{padding:15,borderRadius:5}}>Add Item</button>
       {loading && <h1>Loading ...</h1>}
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
