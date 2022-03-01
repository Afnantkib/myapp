import React from "react";


class CartItem extends React.Component {
    

    increaseQty =()=>{
     this.setState((prevState)=>{
        return { qty:prevState.qty+1}
     })
    }
    decreaseQty =()=>{
        const {qty}=this.state;
        if(qty==0){
            return;
        }
     this.setState((prevState)=>{
        return { qty:prevState.qty-1}
     })
    }
    




    render() {
        const {price,title,qty}=this.props.product ;
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
                     src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" />
                     
                    <img className="action-icons"
                    onClick={this.decreaseQty}
                     src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                    <img className="action-icons"
                    
                     src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />

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