import axios from "axios";
import * as dotenv from 'dotenv';

dotenv.config();
const instance = axios.create(
    {
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        headers: {
            "X-Application-Id": process.env.NEXT_PUBLIC_APPLICATION_ID
        }
    }
)

export default instance;
