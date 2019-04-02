import axios from 'axios';

// export const getTodos = () => {
//   return axios.get(`http://localhost:8080/todos`)
//    .then(res => {
//      console.log(' here');
//     return res.data
//     })
//    .catch(error => { 
//     console.log(error.response);
//    // return error.response;
//    })
// }

const basedUrl = 'http://localhost:8080/';
const GET = 'GET';
const POST = 'POST';
// const PUT = 'PUT';
// const DELETE = 'DELETE';

// export const createTodo = (name) => {
//   return axios.post(`http://localhost:8080/todos`, { name, isComplete: false })
//     .then(res => res.data)
//     .catch(error => error);
// }
export const getTodos = () => {
  return {
    method: GET,
    url: `${basedUrl}todos`
  }
}

export const createTodo = (name) => {
  return {
    method: POST,
    url: `${basedUrl}todos`,
    data: {
      name,
      isComplete: false
    }
  }
}


