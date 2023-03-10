import LayoutErrorModal from "../../../components/LayoutErrorModal";
import { validationStep } from "../../../utils/validationSteps";
import { useContext } from "react";
import { GlobalContext } from "../../../Context";
function ErrorGeneral({ setStep }) {
    const { optionProcess } = useContext(GlobalContext)
    const handleSetStep = () => {
        if (optionProcess === "E") {
            return setStep(validationStep.DNI);
        }
        setStep(validationStep.SELFIE)
    }
    return (
        <LayoutErrorModal
            errMsg={"Ups algo salio mal"}
            textDescription={"Por favor, intentalo de nuevo"}
            handleClick={handleSetStep}
        />
    )
}

export default ErrorGeneral;
