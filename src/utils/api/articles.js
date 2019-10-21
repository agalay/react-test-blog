import axios from "../../core/axios";

const articlesApi = {
  get: id => axios.get(`/posts${id ? "/" + id : ""}`)
};

export default articlesApi;
