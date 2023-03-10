import ErrorFrontDNI from "./ErrorFrontDni";
import ErrorGeneral from "./ErrorGeneral";
const CODE_ERROR = {
    3008929: 'Fallo chequeo de liveness',
    3008915: 'El rostro esta cortado',
    3008914: 'El rostro esta cerca de algún borde',
    4000001: 'No se encontro un documento',
    DNI: 4000001,
}
function ErrorScreen({ setStep, errorMsg }) {
    console.log("Error message", errorMsg);
    switch (errorMsg) {

        case CODE_ERROR.DNI: {
            return (
                <ErrorFrontDNI setStep={setStep} />
            );
        }
        default: {
            return (
                <ErrorGeneral setStep={setStep} />
            )
        }
    }
}

export default ErrorScreen;
