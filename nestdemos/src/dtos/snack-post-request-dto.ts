import { Snack } from 'src/entities/snack';

export interface SnackPostRequestDto {
  name: string;
  rating: number;
  photoUrl: string;
}

export const createSnackFromPostRequestDto = (
  dto: SnackPostRequestDto,
): Snack => {
  return {
    id: 0,
    name: dto.name,
    rating: dto.rating,
    photoUrl: dto.photoUrl,
  };
};
