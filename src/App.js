//import logo from './logo.svg';
import './App.css';

import Form from './components/Form';

import { useState } from 'react';
import Table from './components/Table';

function App() {
const [formData, setFormData] = useState({
  date:"",
  description: "",
  category: "",
  amount: ""

})

const collectData = (e) =>{
  e.preventDefault();
  setFormData({
    ...formData,
    [e.target.id]: e.target.value
  })
}

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(formData)
}

  return (
    <div className="container mt-4">
      
      <h1 className="text-center">Code challenge</h1>
      <Form 
            date={formData.date} 
            description={formData.description}
            category={formData.category} 
            amount={formData.amount}
            onchange={collectData}
            onsubmit ={handleSubmit}

       />
       <Table/>
    </div>
  );
}

export default App;
