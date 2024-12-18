import { useContext } from "react";
import { Countercontext } from "./contextcart";
import { Link } from "react-router-dom";

function Pay() {
  const { quantity, total, item } = useContext(Countercontext);

  return (
    <>
      <div id="par">
      <div id="form">
        <h1>Enter Card Number</h1>
        <input id="email" type="text" placeholder="email" />
        <input id="email" type="number" placeholder="card number" />
        <input id="email" type="password" placeholder="PIN" /><button id="email">Click to pay</button>
      </div>

      

      <div id="check">
        <h1>CART</h1>
        {item.map((pro) => {
          if (pro) {
            return (
              <div id="ccard" key={pro.index}>
                <p>{pro.name}</p>
                <p>{pro.price}$</p>
                <p>Quantity: {quantity[pro.index] || 0}</p>
              </div>
            );
          }
        })}
        <p>Total: {total}</p>
        <Link to="/">
        <button id="btn1">Add more</button>
      </Link>
      </div>
      </div>
    </>
  );
}

export default Pay;
