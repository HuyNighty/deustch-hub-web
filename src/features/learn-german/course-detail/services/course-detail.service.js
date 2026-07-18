import { api } from "@/shared/api/axios";

export async function getViewerCourseDetail(courseId) {
  const response = await api.get(`/courses/${courseId}/viewer`);

  return response.data.result;
}
