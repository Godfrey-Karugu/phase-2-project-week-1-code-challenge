import React,{useState, useEffect} from "react";
import TableRow from "./TableRow";

function Table(){

  const[data, setData] = useState([])

  useEffect (()=>{
    fetch("http://localhost:3002/transactions")
    .then(res => res.json())
    .then(data =>setData(data))
    
  },[])
  //console.log(data)
  return(
    <>
    <h3 className="text-center mt-4">Transactions Table</h3>
            <table className="table">
                <thead>
                      <tr>
                            <th scope="col">id</th>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Category</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Action</th>
                      </tr>
                </thead>
                <tbody>
                     {
                      data.map((item)=>{
                        return(
                          <TableRow key={item.id}
                            id = {item.id}
                            date ={item.date}
                            description ={item.description}
                            category = {item.category}
                            amount ={item.amount}

                          />
                        )
                      })
                     }
                
                </tbody>
               
              </table>
              </>
  )
}

export default Table;