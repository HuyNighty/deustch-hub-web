import apiClient from "@/shared/api/api-client";

export function getLessonDetail(courseId, lessonId) {
  return apiClient.get(`/me/courses/${courseId}/lessons/${lessonId}`);
}
