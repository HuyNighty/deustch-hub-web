import { useEffect, useState } from "react";
import { getViewerCourseDetail } from "../services/course-detail.service";

export function useCourseDetail(courseId) {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      try {
        setLoading(true);
        setError(null);

        const data = await getViewerCourseDetail(courseId);

        setCourse(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCourse();
  }, [courseId]);

  return {
    course,
    loading,
    error,
  };
}
