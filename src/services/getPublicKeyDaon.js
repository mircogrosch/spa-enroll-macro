import axios from "axios";
export default async function getPublicKeyDaon(uuid) {
    try {
        const { data } = axios.get("https://enrolamiento.macrotest.hooli.la/enrolamiento/spa/publickey/crear",{
            headers:{
                "X-Operation-Id": uuid,
                "X-Application-Id": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvbklkIjoiRU1FQXBwIn0.uXvl6IItDGWJ0WAKvVWWcwbLam2yMqUmGUniBJsfdeQ"
            }
        });
        return data;
    } catch (e) {
        console.loge(e);
    }
}

