import React from "react";

function Form({date, description, category,amount,onchange, onsubmit}){

  return(
    <form onSubmit={onsubmit}>
            <div>
                  <label htmlFor="date" >Date</label>
                  <input type="date" className="form-control" id="date" value={date} onChange={onchange}/>
              </div>
              <div>
                  <label htmlFor="description" >Description</label>
                  <input type="text" className="form-control" id="description" value={description} onChange={onchange} />
              </div>
              <div>
                  <label htmlFor="category" >Category</label>
                  <input type="text" className="form-control" id="category" value={category} onChange={onchange}/>
              </div>
              <div>
                  <label htmlFor="amount" >Amount</label>
                  <input type="number" className="form-control" id="amount"  value={amount} onChange={onchange}/>
              </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
          </form>
  )
}

export default Form;