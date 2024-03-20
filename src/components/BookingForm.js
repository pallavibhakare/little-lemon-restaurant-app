import { useState } from "react";


const BookingForm = ({ availableTimes, dispatch, submitForm}) => {
 
    const [formData, setFormData] = useState({
        name: "",
        date:"",
        time:"00:00",
        guests:"0",
        occasion:"Occasion"
    });

    const handleFormChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }))
      }
      const handleDateChange = async (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }))
       dispatch({ type: 'UPDATE_TIMES', payload: value })
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(formData);
      }
      const currentDate = new Date().toISOString().split("T")[0]
      //const options = availableTimes ? availableTimes.map(time => <option key={time}>{time}</option>) : null;


    return (
        <div className='bookingForm'>
            <form onSubmit={handleSubmit}>
                <h1>Book Now!</h1>
                <fieldset>
                    <div className='name'>
                        <label htmlFor='name' aria-label="Enter your username">Name</label>
                        <input
                            id='name'
                            name="name"
                            type='text'
                            value={formData.name}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                    <div className='date'>
                        <label htmlFor="res-date" aria-label="Enter date">Choose date</label>
                        <input
                            id='res-date'
                            data-testid="res-date"
                            type='date'
                            name="date"
                            value={formData.date}
                            onChange={handleDateChange}
                            required
                            min={currentDate}
                        />
                    </div>
                    <div className='time'>
                        <label htmlFor="res-time" aria-label="Choose time">Choose Time</label>
                        <select id="res-time"
                            name="time"
                            data-testid="res-time"
                            value={formData.time}
                            onChange={handleFormChange}
                            required
                        >
                             {Array.isArray(availableTimes) ? (
    availableTimes.map((time) => (
      <option key={time} value={time}>{time}</option>
    ))
  ) : null}
                        </select>
                    </div>
                    <div className='number-of-guests' aria-label="Enter number of guests">
                        <label htmlFor='guests'>Number of Guests</label>
                        <input
                            id='guests'
                            type='number'
                            name="guests"
                            data-testid="res-guests"
                            placeholder='1'
                            min={1}
                            max={10}
                            value={formData.guests}
                            onChange={ handleFormChange }
                            required
                        />
                    </div>
                    <div className='occasion'>
                        <label htmlFor='occasion' aria-label="Enter Occasion">Occasion</label>
                        <select id='occasion'
                            name="occasion"
                            data-testid="res-occasion"
                            value={formData.occasion}
                            onChange={handleFormChange }
                        >
                            <option value="Occasion">Occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>
                    <div className='submit-reservation-button' htmlFor="submit" aria-label="Submit form"> 
                        <input
                        id="submit"
                        name="submit"
                        type='submit'
                        value="Make Your reservation" 
                        disabled={!formData.name || formData.date === "" || formData.time === "00:00" || formData.guests === "" || formData.occasion === ""}
                        />
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default BookingForm;