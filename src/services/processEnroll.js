import axios from "axios"
export default async function processEnroll(uuid,data){ 
    const {frontDni, backDni, imageDni,selfie } = data;
    try{
        const {data} = await axios.post("https://enrolamientocanal.macrotest.hooli.la/enrolamiento/canal/spa/persona/rostro/enrolar",{
            linkid: uuid,
            frente: frontDni,
            dorso: backDni,
            fotodocumento: imageDni,
            selfie
        },{
            headers:{
                "X-Operation-Id": uuid,
                "X-Application-Id": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvbklkIjoiRU1FQXBwIn0.uXvl6IItDGWJ0WAKvVWWcwbLam2yMqUmGUniBJsfdeQ"
            }
        });
        return data
    }catch(e){
            return e.response.data
    }

}