import { ApiError } from "./api-error";

function isValidApiResponse(payload) {
  return (
    payload !== null &&
    typeof payload === "object" &&
    typeof payload.code === "number"
  );
}

export function unwrapApiResponse(payload) {
  if (!isValidApiResponse(payload)) {
    throw new ApiError({
      message: "The server returned an unexpected response.",
    });
  }

  return payload.result;
}
