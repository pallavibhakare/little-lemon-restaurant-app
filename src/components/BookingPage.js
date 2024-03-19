import { useState, useReducer } from "react"
import BookingForm from "../components/BookingForm"
import { fetchAPI, submitAPI } from "../api"
import { useNavigate } from "react-router-dom";

function BookingPage () {

  const [date, setDate] = useState(new Date())
 
  function initializeTimes(date) {
    return fetchAPI(date)
    }

  function updateTimes(date) {
    const dateObj = new Date(date)
    return fetchAPI(dateObj)
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      
      console.log('Form submitted:', formData);
    }
  }
  
  function reducer(state, action) {
    let newState
    switch (action.type) {
      case 'UPDATE_TIMES':
      const newDate = new Date(action.payload);
      newState = updateTimes(newDate)
      break;

      default:
        throw new Error()
    }
    return newState
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date))
  return (
    <div>
      <h1>Welcome to Little Lemon!</h1>
      <p>Please fill out the form to reserve a table</p>
      <BookingForm 
      availableTimes={availableTimes} 
      dispatch={dispatch} 
      submitForm={submitForm}
      />
     
    </div>
  );
};

export default BookingPage;