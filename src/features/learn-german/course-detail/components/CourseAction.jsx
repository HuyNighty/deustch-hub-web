import { useNavigate } from "react-router-dom";

import { useEnrollAction } from "../hooks/useEnrollAction";

export default function CourseAction({ courseId, enrollmentStatus }) {
  const navigate = useNavigate();

  const { handleEnroll } = useEnrollAction(courseId);

  switch (enrollmentStatus) {
    case "ENROLLED":
    case "IN_PROGRESS":
      return (
        <button onClick={() => navigate(`/my-learning/courses/${courseId}`)}>
          Continue Learning
        </button>
      );

    case "COMPLETED":
      return <button>View Certificate</button>;

    default:
      return <button onClick={handleEnroll}>Enroll Course</button>;
  }
}
