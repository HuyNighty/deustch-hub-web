import { toApiError } from "./api-error";
import { unwrapApiResponse } from "./api-response";
import { api } from "./axios";

async function request(config) {
  try {
    const response = await api.request(config);

    return unwrapApiResponse(response.data);
  } catch (error) {
    throw toApiError(error);
  }
}

const apiClient = {
  get(url, config = {}) {
    return request({ ...config, method: "get", url });
  },
  post(url, data, config = {}) {
    return request({ ...config, method: "post", url, data });
  },
  put(url, data, config = {}) {
    return request({ ...config, method: "put", url, data });
  },
  patch(url, data, config = {}) {
    return request({ ...config, method: "patch", url, data });
  },
  delete(url, config = {}) {
    return request({ ...config, method: "delete", config });
  },
};

export default apiClient;
