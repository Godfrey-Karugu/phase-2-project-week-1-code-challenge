import logo from './logo.svg';
import './App.css';

import Form from './components/Form';

import { useState } from 'react';

function App() {
const [formData, setFormData] = useState({
  date:"",
  description: "dental service",
  category: "Mental",
  amount: "3000"

})

  return (
    <div className="container mt-4">
      
      <h1 className="text-center">Code challenge</h1>
      <Form 
            date={formData.date} 
            description={formData.description}
            category={formData.category} 
            amount={formData.amount}

       />
    </div>
  );
}

export default App;
