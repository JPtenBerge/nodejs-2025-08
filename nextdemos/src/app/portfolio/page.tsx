import { Suspense } from "react";
import { getProjects } from "../data/projects.dal";
import ProjectsViewer from "./projects-viewer";

export default async function Page() {
  return (
    <>
      <h1>Portfolio page</h1>

      <Suspense fallback={<Loading />}>
        <ProjectsViewer />
      </Suspense>
    </>
  );
}

export function Loading() {
	return (
		<p>LOADING!</p>
	)
}
