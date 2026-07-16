import { useNavigate } from "react-router-dom";

import { useAuth } from "@/features/auth/hooks/useAuth";

import { enrollCourse } from "../services/enroll.service";

export function useEnrollAction(courseId) {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  async function handleEnroll() {
    if (!isAuthenticated) {
      navigate("/login", {
        state: {
          redirectTo: `/learn-german/courses/${courseId}`,
        },
      });

      return;
    }

    try {
      await enrollCourse(courseId);

      navigate(`/my-learning/courses/${courseId}`, {
        replace: true,
      });
    } catch (error) {
      console.error(error);

      alert("Enroll failed.");
    }
  }

  return {
    handleEnroll,
  };
}
