const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

//This function accepts a date as a parameter and returns an array 
//of available reservation times for the provided date 
export function fetchAPI(date) {
    if (!(date instanceof Date)) {
        throw new TypeError('Parameter must be a Date object');
    }
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
//This function accepts the booking form data as a parameter 
//and will return true if the data was successfully submitted.
export function submitAPI(formData) {
    return true;
};
export const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return { ...state, times: fetchAPI(action.date) };
      default:
        return state;
    }
  };
  
  export const initializeTimes = () => {
    // create a Date object to represent today's date
    const today = new Date();
    return { times: fetchAPI(today) };
  };