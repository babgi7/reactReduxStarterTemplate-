import axios from 'axios';

// const request = async (config) => {
//     try {
//         const res = await axios({ method: config.method, url: config.url, data: config.data })
//         return res.data;
//     } catch (error) {
//         // do something with error
//        console.log(error)
//     }
// }

const request = async (config) => {
    try {
        const res = await axios({ method: config.method, url: config.url, data: config.data })     
        return res.data;
    } catch (error) {
        console.log(error.response)
    }
}

export default request;

