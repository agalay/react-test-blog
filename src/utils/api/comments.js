import axios from "../../core/axios";

const commentsApi = {
  get: id => axios.get(`/comments${id ? "/" + id : ""}`)
};

export default commentsApi;
