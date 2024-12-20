import { Link } from "react-router-dom";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { additems,removeitems } from "./reduxreducer"; 
import Shoe1 from "./assets/shoe1.jpg";
import Shoe2 from "./assets/shoe2.jpg";
import Shoe3 from "./assets/shoe3.jpg";
import Shoe4 from "./assets/shoe4.jpg";

function List() {
  const dispatch = useDispatch();

  
  const { items, total, quantity } = useSelector((state) => state.cart);


  const itemsList = [
    { index: 1, name: "Shoe1", price: 10, src: Shoe1 },
    { index: 2, name: "Shoe2", price: 20, src: Shoe2 },
    { index: 3, name: "Shoe3", price: 30, src: Shoe3 },
    { index: 4, name: "Shoe4", price: 40, src: Shoe4 },
  ];

  return (
    <>
      <div id="par">
        <div id="list">
          {itemsList.map((product) => {
            return (
              <div key={product.index} id="card">
                <div id="right">
                  <img src={product.src} alt={product.name} />
                </div>
                <div id="left">
                  <h1>{product.name}</h1>
                  <h3>{product.price}$</h3>
                  <button
                    id="cart"
                    onClick={() =>
                      dispatch(
                        additems({
                          name: product.name,
                          price: product.price,
                          index: product.index,
                        })
                      )
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>


        <div id="check">
          <h1>CART</h1>
          {items.map((item) => (
            <div key={item.index} id="ccard">
              <p>{item.name}</p>
              <p>{item.price}$</p>
              <button onClick={()=>dispatch(
                    additems({
                      name: item.name,
                      price: item.price,
                      index: item.index,
                    }))}>+</button>
              <p>Quantity: {quantity[item.index] || 0}</p>
              <button onClick={()=>dispatch(
                    removeitems({
                      name: item.name,
                      price: item.price,
                      index: item.index,
                    }))}>-</button>
            </div>
          ))}
           
          <p>Total: {total}$</p>
          <Link to="/Payment">
            <button id="btn1">Check Out</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default List;
