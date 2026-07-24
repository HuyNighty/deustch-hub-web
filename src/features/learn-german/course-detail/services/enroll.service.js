import apiClient from "@/shared/api/api-client";

export function enrollCourse(courseId) {
  return apiClient.post(`/courses/${courseId}/enroll`);
}
