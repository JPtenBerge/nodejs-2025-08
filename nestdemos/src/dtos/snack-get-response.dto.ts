import { Snack } from "src/entities/snack";

export interface SnackGetResponseDto {
  id: number;
  name: string;
  rating: number;
  photoUrl: string;
}

export const createSnackGetResponseDto = (entity: Snack): SnackGetResponseDto => {
  return {
    id: entity.id,
    name: entity.name,
    rating: entity.rating,
    photoUrl: entity.photoUrl,
  };
};



// waarom geen class?
// - in JS/TS, classes zijn lang niet zo populair als in .NET/Java
// - Angular
//   - interceptors route guard
// - React
// - Vue