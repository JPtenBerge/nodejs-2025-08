import { Snack } from 'src/entities/snack';

export interface SnackPostResponseDto {
  id: number;
  name: string;
  rating: number;
  photoUrl: string;
}

export const createSnackPostResponseDto = (
  entity: Snack,
): SnackPostResponseDto => {
  return {
    id: entity.id,
    name: entity.name,
    rating: entity.rating,
    photoUrl: entity.photoUrl,
  };
};
