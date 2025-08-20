import { Snack } from "src/entities/snack";

export interface SnackGetAllResponseDto {
  snacks: SnackGetAllSnackDto[];
  //   totalNrOfPages: number;
  //   currentPage: number;
}

export interface SnackGetAllSnackDto {
  id: number;
  name: string;
  rating: number;
  photoUrl: string;
}

export const createSnackGetAllSnackDto = (entity: Snack): SnackGetAllSnackDto => {
  return {
    id: entity.id,
    name: entity.name,
    rating: entity.rating,
    photoUrl: entity.photoUrl,
  };
};