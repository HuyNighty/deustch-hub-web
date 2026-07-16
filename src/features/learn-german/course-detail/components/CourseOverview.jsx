export default function CourseOverview({ course }) {
  return (
    <>
      <h2>Overview</h2>

      <p>{course.description}</p>

      <p>Level: {course.level}</p>

      <p>Estimated Hours: {course.estimatedHours}</p>
    </>
  );
}
