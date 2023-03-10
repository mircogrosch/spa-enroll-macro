import LayoutErrorModal from "../../../components/LayoutErrorModal"
import { FrontDNI } from "../../../../public/assets";
import { validationStep } from "../../../utils/validationSteps";
function ErrorFrontDNI({ setStep }) {
    const handleSetStep = () => {
        setStep(validationStep.DNI);
    }
    return (
        <LayoutErrorModal
            iconError={FrontDNI}
            errMsg={"No pudimos validar el frente del DNI"}
            textDescription={"Procurá que tenga buena iluminación y evitá reflejos."}
            handleClick={handleSetStep}
        />
    )
}

export default ErrorFrontDNI;