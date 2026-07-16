import { useEffect, useState } from "react";
import { getMyCourseDetail } from "../services/my-course-detail.service";

function useMyCourseDetail(courseId) {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const data = await getMyCourseDetail(courseId);

        setCourse(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCourse(course);
  }, [courseId]);

  return { course, loading, error };
}

export default useMyCourseDetail;
