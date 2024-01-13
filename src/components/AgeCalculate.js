import React, { useState } from "react";
import './AgeCalculate.css';

const Agecalculate = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);

    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();

    if (monthDiff < 0 ||(monthDiff === 0 && today.getDate() < birthdateDate.getDate()))
    {
      age--;
    }
    setAge(age);
  };

    const resetCalculate = () => {
      setBirthdate("");
      setAge(0);
    };

  return (
    <>

    <div className="container">

      <h2>Age Calculator</h2>

        <h4 className="age-heading">
          Date of Birth: 
          </h4>
        
      <div className="heading-1">
      <input
        type="date"
        placeholder="mm/dd/yyyy"
        value={birthdate}
        onChange={e => setBirthdate(e.target.value)}
        />

      <div className="button-div">
      <button
        type="button"
        className="btn btn-primary btn-lg m-1 btn-fl"
        onClick={calculateAge}
        >
        Calculate Age
      </button>

      <button className="btn btn-primary btn-lg m-1 btn-fl" type="reset" onClick={resetCalculate}>
        Reset
      </button>
      </div>

      </div>

      
      
       <h3 className="age-cal"> Your Age is: {age > 0 ? `${age}` : ''}
       </h3>
     
      </div>
    </>
  );
};

export default Agecalculate;
