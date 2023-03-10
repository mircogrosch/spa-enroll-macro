import axios from "axios";
export default async function processValidation(uuid, selfie) {
    try {
        const { data } = await axios.post(
            "https://validacion.macrotest.hooli.la/validacion/spa/persona/rostro/validar",
            {
                linkid: uuid,
                selfie,
            },
            {
                headers: {
                    "X-Operation-Id": uuid,
                    "X-Application-Id":
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvbklkIjoiRW5yb2xhbWllbnRvQXBwIn0.qlnvig59ZmGYx79SIpTrqqPKDqdRCoYEO-VcpUUL3YI",
                },
            }
        );
        return data;
    } catch (e) {
        return e.response.data;
    }
}
