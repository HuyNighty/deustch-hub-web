import apiClient from "@/shared/api/api-client";

export function getViewerCourseDetail(courseId) {
  return apiClient.get(`/courses/${courseId}/viewer`);
}
