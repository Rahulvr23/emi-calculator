
import { useState } from 'react';
import './App.css';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
function App() {
  const[amount,setAmount]=useState(0)
  const[rate,setRate]=useState(0)
  const[months,setMonth]=useState(0)
  const[emi,setEmi]=useState(null)
  const calculateEmi = () => {
    const principalAmount = parseFloat(amount);
    const monthlyInterestRate = parseFloat(rate) / (12 * 100);
    const numberOfPayments = parseFloat(months);

    if (!isNaN(principalAmount) && !isNaN(monthlyInterestRate) && !isNaN(numberOfPayments)) {
      const emiValue =
        (principalAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
      setEmi(emiValue.toFixed(2));
    } else {
      setEmi(null);
    }
  };


 

  return (
    <div className="App">
      <div className='conatiner-fluid mt-5 mx-5 p-5' style={{width:"50%"}}><h1>EMI Calculator</h1>
      <MDBInput label='Enter amount' className='m-5'  value={amount||""} onChange={(e)=>{setAmount(e.target.value)}} id='form1' type='text' />
<MDBInput label='Enter Rate' className="m-5"value={rate||""} onChange={(e)=>{setRate(e.target.value)}} id='form1' type='text' />
<MDBInput label='Enter Months' className="m-5"value={months||""} onChange={(e)=>{setMonth(e.target.value)}} id='form1' type='text' />
<MDBBtn color='success' onClick={calculateEmi}>Calculate</MDBBtn>
<p className='mt-5'>
  <b>EMI= {emi}</b>
</p>

      </div>

    </div>
  );
}

export default App;
