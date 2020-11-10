import {useState} from 'react';

const useForm = validate => {
    const [values, setValues] = useState({
      yourName: '',
      prefix: '48',
      mobile: '',
      chessPlayer: '',
      day:'',
      month: '',
      year: '',

    });
    const [errors, setErrors] = useState({});
  
    const handleChange = e => {
      const { name, value } = e.target;
      if (name === 'mobile') {
        var fPhone = formatPhoneText(value)
        setValues({
          ...values,
          [name]: fPhone
        });
      } else {
        setValues({
          ...values,
          [name]: value
        });
      }
      
    };

    function formatPhoneText(value){
      return value.replace(/\D/g, "").match(/.{1,3}/g)?.join(" ").substr(0, 11) || ""
    }
    const handleSubmit = e => {
      e.preventDefault();
      setErrors(validate(values));
    };
    
    return { handleChange, handleSubmit, values, errors };
  };
  
  export default useForm;