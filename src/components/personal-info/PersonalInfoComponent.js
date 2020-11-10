import './PersonalInfoComponent.scss';
import useForm from '../../utils/useForm';
import validate from '../../utils/validateInfo';
import DayMonthYear from '../day-month-year/DayMonthYear';
import PhoneNumberSelectorComponent from '../phone-number-selector/PhoneNumberSelectorComponent';

function PersonalInfoComponent() {

const {handleChange, values, errors, handleSubmit} = useForm(validate);
  return (
    <div className="content-area">
        <form className="form" onSubmit={handleSubmit}>
            <p className="description">Provide personal information so that we can create a new account for you.</p>
            <div className='form-elements'>
                <div className="input-data">
                    <label htmlFor='yourName' className="form-label">Your name</label>
                    <input
                        tabIndex="1"
                        type='text'
                        name='yourName'
                        placeholder="e.g Elvis Scott"
                        className={errors.yourName ? 'form-input yn-field form-input-error': 'form-input yn-field'}
                        value={values.yourName}
                        onChange={handleChange}
                        required
                    />
                    <hr className="underline"/>
                    {errors.yourName && <p className="error-field">{errors.yourName}</p>}
                </div>
            </div>
            <div className='form-elements'>
                    <PhoneNumberSelectorComponent  handleChange={handleChange} values={values} errors={errors}/>
            </div>
            <div className='form-elements'>
                <div className="input-data radio-buttons">
                    <label className="form-label">Can you play chess?</label>
                    <label className='custom-radio'>
                        <input type="radio" name="chessPlayer" value="Yes" onChange={handleChange}/>
                        <span className={errors.chessPlayer ? 'radio-btn form-input-error': 'radio-btn'} tabIndex="4">
                           
                            <span className="radio-lb">Yes</span>
                            <span className="dot-area">
                                <span className="dot"></span>
                            </span>
                        </span>
                    </label>
                    <label className='custom-radio'>
                        <input type="radio" name="chessPlayer" value="No" onChange={handleChange}/>
                        <span className={errors.chessPlayer ? 'radio-btn form-input-error': 'radio-btn'} tabIndex="5">
                            <span className="radio-lb">No</span>
                            <span className="dot-area">
                                <span className="dot"></span>
                            </span>
                        </span>
                    </label>
                    {errors.chessPlayer && <p className="error-field">{errors.chessPlayer}</p>}
                </div>
            </div>
            <div className='form-elements dob-area'>
                <label htmlFor='dob' className="form-label">Date of birth</label>
                <div className="input-data">
                    <DayMonthYear handleChange={handleChange} values={values} errors={errors}/>
                </div>
            </div>
                
            <button type="submit" className="mBtn"  tabIndex="9">Continue <span className="icon">&#8594;</span></button>
        </form>
        
    </div>

  );
}

export default PersonalInfoComponent;
