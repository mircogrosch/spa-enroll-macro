import { useState } from "react";

import { validationStep } from "../../utils/validationSteps";
import { Welcome, InitialSelfie, TakeSelfie, ValidateIdentity, End, Error } from "../../screens/index";

function ProcessRegistration() {
  const [step, setStep] = useState(validationStep.WELCOME);
  const [errMsg, setErrMsg] = useState(null);
  return (
    <>
      {step === validationStep.WELCOME && <Welcome setStep={setStep} />}
      {step === validationStep.SELFIE && <InitialSelfie setStep={setStep} />}
      {step === validationStep.TAKE_SELFIE && <TakeSelfie setStep={setStep} />}
      {step === validationStep.VALIDATING && <ValidateIdentity setStep={setStep} />}
      {step === validationStep.VALIDATED && <End />}
      {step === validationStep.ERROR && <Error errorMsg={errMsg} setStep={setStep} />}
    </>

  )
}

export default ProcessRegistration;
