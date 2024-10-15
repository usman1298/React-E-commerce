import { useSelector, useDispatch } from "react-redux";
import { incAtCart,decAtCart,resetCart, } from "../redux/cartAction";
import { useNavigate } from "react-router-dom";

 

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddItem = (index) => {
    dispatch(incAtCart(index));
  };

  const handleRemoveItem = (index) => {
    dispatch(decAtCart(index));
  };

  const handleProceed = () => {
    alert(
      "Order Successfull! It Will Be Delieverd To You As it will be Dispatch"
    );
    dispatch(resetCart());
    navigate("/products");
  };
  let totalPrice = 0;
  return (
    <>
      <h1 className="cart-c my-5">CART</h1>
    <div className="">

      {cartItems.map((e, index) => {
        const totalProductPrice = e.item.price * e.quantity;
        totalPrice += totalProductPrice;
        return (
          <div className="cart-item" key={index}>
            <img  width={80}  src={e.item.image} alt={e.item.title} />
            <div className="item-details mx-4">
              <h1>
                {e.item.title.slice(0,15)}-(${e.item.price})
              </h1>
<div className="d-flex ">
              <div className="quantity-controls d-flex  mr">
              <button className="btn btn-success" onClick={() => handleRemoveItem(index)}>-</button>
                <h2 className="mx-3">{e.quantity}</h2>
                <button  className="btn btn-success " onClick={() => handleAddItem(index)}>+</button>
                
              <h3 className="mx-3">${totalProductPrice}</h3>
              </div>
              </div>
            </div>
          </div>
        );
      })}
      <h3 className="my-5">
        The Total Payable Value:{" "}
        <span className="totalPrice">${totalPrice}</span>
      </h3>
      <button className=" btn btn-warning" onClick={handleProceed}>
        Proceed To Checkout
      </button>
    </div>
    </>
  );
}

export default Cart;