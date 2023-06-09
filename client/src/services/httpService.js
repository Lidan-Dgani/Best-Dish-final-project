import axios from "axios";
import {
  toast
} from "react-toastify";

axios.interceptors.response.use(null, (err) => {
  const {
    response
  } = err;

  if (!response) {
    toast.error('Bad Connection To Server')
  }

  if (response && response.status >= 403) {
    toast.error('Unexpected Error Has Occurred')
  }

  return Promise.reject(err);
})

export function setDeafaultCommonHeader(header, value) {
  axios.defaults.headers.common[header] = value;
}

const httpService = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
  setDeafaultCommonHeader,
};

export default httpService;