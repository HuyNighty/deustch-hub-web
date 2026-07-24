import apiClient from "@/shared/api/api-client";

export async function getCourses() {
  const page = await apiClient.get("/courses");

  return page.items;
}
