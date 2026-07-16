import { useEffect, useState } from "react";
import { getCourseDetail } from "../services/course-detail.service";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { getMyCourseDetail } from "../../../my-learning/my-course-detail/services/my-course-detail.service";

export function useCourseDetail(courseId) {
  const { isAuthenticated } = useAuth();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      setLoading(true);
      setError(null);
      try {
        let data;

        if (isAuthenticated) {
          data = await getMyCourseDetail(courseId);
        } else {
          data = await getCourseDetail(courseId);
        }

        setCourse(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCourse();
  }, [courseId, isAuthenticated]);

  return {
    course,
    loading,
    error,
  };
}
