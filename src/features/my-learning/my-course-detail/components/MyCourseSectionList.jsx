export default function MyCourseSectionList({ sections }) {
  return (
    <>
      <h2>Sections</h2>

      {sections.map((section) => (
        <div key={section.id}>
          <h3>{section.title}</h3>

          <p>{section.description}</p>

          <ul>
            {section.lessons.map((lesson) => (
              <li key={lesson.id}>{lesson.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
