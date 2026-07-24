const DEFAULT_MESSAGE = "Something went wrong. Please try again.";

export class ApiError extends Error {
  constructor({
    code = null,
    status = null,
    message = DEFAULT_MESSAGE,
    errors = [],
  } = {}) {
    super(message);

    this.name = "ApiError";
    this.code = code;
    this.status = status;
    this.errors = Array.isArray(errors) ? errors : [];
  }
}

export function toApiError(error) {
  if (error instanceof ApiError) {
    return error;
  }

  if (error instanceof Error) {
    return new ApiError({
      message: error.message,
    });
  }

  if (typeof error === "string") {
    return new ApiError({
      message: error,
    });
  }

  return new ApiError(error);
}

export function getFieldMessage(error, field) {
  if (!isApiError(error)) {
    return null;
  }

  return error.errors.find((detail) => detail.field === field)?.message ?? null;
}

export function isApiError(error) {
  return error instanceof ApiError;
}

export function hasFieldErrors(error) {
  return isApiError(error) && error.errors.length > 0;
} //V2 will update later.
