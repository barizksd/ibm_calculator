import './App.css'
import React, { useState } from "react";



function App() {

  const [Weight, setWeight] = useState("");
  const [Height, setHeight] = useState("");
  const [Results, setResults] = useState("");


  const result = () => {
    if (!Weight || !Height || Height <= 0) {
      alert("Please Enter the value")
      return
    } else {
      setResults((Weight / ((Height / 100) * (Height / 100))).toFixed(2));
      alert(`Your Ibm Value is : ${ibm}`)
    }
  }

  const reset = () => {
    setWeight("");
    setHeight("");
    setResults("");
  };


  return (
    <>

      <div className='row'>
        <div className="col-md-4"></div>


        <div className="col-md-4">
          <h1 className='text-center mt-2'> BMI Calculator </h1>

          <div className="text-center mt-4 pt-4 bg-danger " style={{ width: "100%", height: "80vh" }} >


            <h3 className='mt-3 pb-2 text-light'>Weight (kg)</h3>
            <div className=' d-flex justify-content-center mb-3' >
              <input type="number" class="form-control w-50  " name='Weight' placeholder="Enter Your Weight" onChange={(e) => setWeight(e.target.value)}></input>
            </div>

            <h3 className='mt-4 pb-2 text-light'>Height (cm)</h3>
            <div className=' d-flex justify-content-center mb-3' >
              <input type="number" class="form-control w-50 " name='Height' placeholder="Enter Your Height"
                onChange={(e) => setHeight(e.target.value)} ></input>
            </div>


            <div className=' d-flex justify-content-center mb-3' >
              <button type="button" class="btn btn-warning me-3" onClick={result}>Calculate</button>
              <button type="button" class="btn btn-warning" onClick={reset}>reset</button>
            </div>

            <div className='  justify-content-center border border-1 m-3' >
              <h3>Result</h3>
              <h3>Ibm Value : {Results}</h3>

            </div>



          </div>


        </div>
        <div className="col-md-4"></div>

      </div>
    </>
  )
}

export default App
