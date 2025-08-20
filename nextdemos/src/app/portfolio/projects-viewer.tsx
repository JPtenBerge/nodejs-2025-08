import { getProjects, Project } from "../data/projects.dal";

export default async function ProjectsViewer() {
  let projects = await getProjects();
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.name}>
          {project.name} krijgt een {project.rating}
        </li>
      ))}
    </ul>
  );
}
