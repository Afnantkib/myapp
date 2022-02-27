import React from "react";


class CartItem extends React.Component {
    constructor (){
        super();
        this.state={
            price:999,
            title:'Phone',
            qty:1,
            img:''
        }



    }

    increaseQty =()=>{
     this.setState((prevState)=>{
        return { qty:prevState.qty+1}
     })
    }
    decreaseQty =()=>{
     this.setState((prevState)=>{
        return { qty:prevState.qty-1}
     })
    }
    




    render() {
        const {price,title,qty}=this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:"grey"}}>Rs {price}</div>
                    <div style={{color:"grey"}}>{qty}</div>
                    <div className="cart-item-actions">
                    <img className="action-icons"
                    onClick={this.increaseQty}
                     src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1645978476~hmac=ca2da12ec1f1a75459f7cc5523eae61a"/>
                    <img className="action-icons" 
                    onClick={this.decreaseQty}
                    src="https://cdn-icons-png.flaticon.com/512/992/992683.png "/>
                    <img className="action-icons" 
                    src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1645978566~hmac=df7a6a4a064aece6b8dda51a6d6b97dd"/>

                    </div>


                </div>



            </div>

        );
    }
}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 8,
background:"grey"

    }


}
export default CartItem;