import axios from "axios"
export default async function validateUUID(uuid){ 
    console.log("UUID", uuid);
    try{
        const {data} = await axios.post("https://enrolamientocanal.macrotest.hooli.la/enrolamiento/canal/spa/link/validar",{
            linkid: uuid
        },{
            headers:{
                "X-Operation-Id": uuid,
                "X-Application-Id": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvbklkIjoiRW5yb2xhbWllbnRvQXBwIn0.qlnvig59ZmGYx79SIpTrqqPKDqdRCoYEO-VcpUUL3YI"
            }
        });
        return data
    }catch(e){
            return e.response.data
    }

}