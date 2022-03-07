import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {

            products: [
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 652,
                    title: 'Laptop',
                    qty: 3,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 3
                }




            ]

        }




    }

    handleIncreaseQty = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;

        this.setState({
            products
        }


        )

    }
handleDecareseQty=(product)=>{

    const { products } = this.state;
    const index = products.indexOf(product);
    if(products[index].qty==0){
        return;
    }
    products[index].qty -= 1;

    this.setState({
        products
    })

}
handleDeleteProduct=(id)=>{
const{products}=this.state;
const items=products.filter(product=>product.id!=id);
this.setState({
    products:items
})




}

    render() {
        const { products } = this.state;



        return (
            <div className="cart" >
                {products.map((product) => {

                    return <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQty={this.handleIncreaseQty}
                        onDecreaseQty={this.handleDecareseQty}
                        onDeleteProduct={this.handleDeleteProduct}
                    />
                })
                }
            </div>
        )


    }




}

export default Cart;
