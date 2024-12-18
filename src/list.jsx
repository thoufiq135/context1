
import { Link } from "react-router-dom";
import "./index.css"
import { useContext } from "react";
import { Countercontext } from "./contextcart";
import Shoe1 from "./assets/shoe1.jpg";
import Shoe2 from "./assets/shoe2.jpg";
import Shoe3 from "./assets/shoe3.jpg";
import Shoe4 from "./assets/shoe4.jpg";

function List(){
  const {name,quantity,setquantity,total,settotal,item,setitem}=useContext(Countercontext)
    const items = [
        { index: 1, name: "Shoe1", price: 10, src: Shoe1 },
        { index: 2, name: "Shoe2", price: 20, src: Shoe2 },
        { index: 3, name: "Shoe3", price: 30, src: Shoe3 },
        { index: 4, name: "Shoe4", price: 40, src: Shoe4 },
      ];
      function adder(index, quan) {
        const itemToAdd = { name: items[index].name, price: items[index].price, index: items[index].index };
      
        setitem((prevItems) => {
          
          const existingItem = prevItems.find((i) => i.name === itemToAdd.name);
      
    
          if (existingItem) return prevItems;
      
        
          return [...prevItems, itemToAdd];
        });
      
  
        settotal((prevTotal) => prevTotal + items[index].price);
      
        setquantity((prevQuantity) => ({
          ...prevQuantity,
          [quan]: (prevQuantity[quan] || 0) + 1, 
        }));
      }
      function subtractor(index, quan) {
        if (!quantity[quan]) return;
    
        settotal((prevTotal) => prevTotal - items[index].price);
    
        setquantity((prevQuantity) => {
          const updatedQuantity = { ...prevQuantity, [quan]: prevQuantity[quan] - 1 };
    
        
          if (updatedQuantity[quan] <= 0) {
            setitem((prevItems) => prevItems.filter((i) => i.index !== quan));
            delete updatedQuantity[quan];
          }
    
          return updatedQuantity;
        });
      }
      
      console.log(name)
      console.log(item)
      console.log(quantity)
      console.log(total)
     
      return(<>
        <div id="par">
        <div id="list">
          {items.map((naam,daam)=>{ 
          return(
            <div id="card">
          <div id="right">
            <img src={naam.src}/>
          </div>
          <div id="left">
            <h1>{naam.name}</h1>
            <h3>{naam.price}$</h3>
            <button id="cart" onClick={()=>adder(daam,naam.index)}>Add to cart</button>
            </div>
        </div>
          )
            
          
          })}
        </div>
        <div id="check">
          <h1>CART</h1>
          {item.map((pro)=>{
            if(pro){
              return(
                <div id="ccard">
                  <p>
                    {pro.name}
                  </p>
                  <p>
                    {pro.price}$
                  </p>
                  <button onClick={()=>adder(pro.index - 1, pro.index)}>+</button>
                  <p>
                    {quantity[pro.index]}
                  </p>
                  <button onClick={()=>subtractor(pro.index - 1, pro.index)}>-</button>
                </div>
              )
            }
          })}
          <p>Total:{total}</p>
           <Link to="/Payment"><button id="btn1">Check Out</button></Link>
        </div>
        </div>
    
    </>)
}
export default List;