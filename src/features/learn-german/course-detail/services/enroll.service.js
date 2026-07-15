import { api } from "@/shared/api/axios";

export async function enrollCourse(courseId) {
  const response = await api.post(`/courses/${courseId}/enroll`);

  return response.data.result;
}
