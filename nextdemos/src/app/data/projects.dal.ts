export const getProjects = async (): Promise<Project[]> => {
  await sleep(2500);

  return [
    { name: "Next.js", rating: 8 },
    { name: "Svelte", rating: 11 },
    { name: "Angular", rating: 8 },
  ];
};

export const sleep = (n: number) => {
  return new Promise<void>((res) => {
    setTimeout(() => res(), n);
  });
};

export interface Project {
  name: string;
  rating: number;
}
