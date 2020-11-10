export default function validateInfo(values) {
    let errors = {};
    if (!values.yourName.trim()) {
      errors.yourName = 'Username required';
    } else if(values.yourName.trim().length < 3) {
      errors.yourName = 'Should have a minimum 3 characters';
    }
    if (!values.prefix.trim()) {
        errors.prefix = 'Prefix required';
    }
    if (!values.mobile.trim()) {
        errors.mobile = 'Mobile required';
    } else if (values.mobile.replace(/\s/g, "").length !== 9) {
        errors.mobile = 'should have 9 digits,';
    }
    if (!values.chessPlayer.trim()) {
        errors.chessPlayer = 'Choose one of these fiels';
    }
    if (!values.day) {
        errors.day = 'the day required';
    }
    if (!values.month) {
        errors.month = 'The month required';
    }
    if (!values.year) {
        errors.year = 'The year required';
    }
    var date = new Date(values.year, values.month, values.day);
    if (Object.prototype.toString.call(date) === "[object Date]") { 
        if (isNaN(date.getTime())) {
            errors.day = 'Invalid Date';
        } 
        else { 
            if(values.month === "04" || values.month === "06" || values.month === "09" || values.month === "11") {
                if(values.day > 30) {
                    errors.day = 'Invalid Date';
                }
            }
            if(values.month === "02" && values.day > 29) {
                errors.day = 'Invalid Date';
            } else if(values.year%4 !== 0 && values.day > 28) {
                    errors.day = 'Invalid Date';   
            }
        } 
    } 

    function calculate_age(dob) { 
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms); 
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    if(calculate_age(date) < 18) {
        errors.year = 'Must be 18yo or older';
    }

    return errors;
  }