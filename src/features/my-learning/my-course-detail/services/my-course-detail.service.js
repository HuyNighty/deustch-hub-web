import { api } from "@/shared/api/axios";

export async function getMyCourseDetail(courseId) {
  const response = await api.get(`/me/courses/${courseId}`);

  return response.data.result;
}
