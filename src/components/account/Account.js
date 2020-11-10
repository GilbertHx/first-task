import { useState } from 'react';
import './Account.scss';
import PersonalInfoComponent from '../personal-info/PersonalInfoComponent';

const Account = () => {
    const [ step , setStep ] = useState(1);

    const nextStep = () => {
        if(step === 2) {
            setStep(0);
        } else {
            setStep(step+1);
        }
    }

    const prevStep = () => {
        if(step === 0) {
            setStep(2);
        } else {
            setStep(step-1);
        }
    }

  return (
    <div className="Account">
        <div className="account-content">
            <h3 className="title">Your Account</h3>
            <div className="main-area">
                <section className="row">
                    <div className="column-one">
                        <div className="lines-two"></div>
                    </div>
                    <div className="column-two">
                        <hr className="top-line"/>
                        {

                            step ===0 ? 
                            // the component below will be replaced by the first step component
                            <PersonalInfoComponent/> :
                            step  === 1 ? <PersonalInfoComponent/> :
                            // the component below will be replaced by the last step component
                            <PersonalInfoComponent/>
                        }
                    </div>
                    <div className="column-three">
                        <div className="first-sec" onClick={prevStep}>
                            <hr className= {step === 0 ? " line-active" : "number-line" }/>
                            <p>01</p>
                            {step === 0 ? <p>First Step</p> : null }
                        </div>
                        <div className="second-sec">
                            <hr className={step === 1 ? "line-active" : "number-line" }/>
                            <p>02</p>
                            {step === 1 ? <p>Personal</p> : null }
                        </div>
                        <div className="third-sec" onClick={nextStep}>
                            <hr className={step === 2 ? " line-active" : "number-line" }/>
                            <p>03</p>
                            {step === 2 ? <p>Last Step</p> : null }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  );
}

export default Account;