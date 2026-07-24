import apiClient from "@/shared/api/api-client";

export function completeLesson(courseId, lessonId, studyMinutes) {
  return apiClient.post(
    `/me/courses/${courseId}/lessons/${lessonId}/complete`,
    { studyMinutes },
  );
}
