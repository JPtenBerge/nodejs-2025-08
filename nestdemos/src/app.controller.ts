import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpException,
	HttpStatus,
	NotFoundException,
	Param,
	Post,
} from '@nestjs/common';
import { SnackService } from './snack.service';

import { createSnackGetAllSnackDto, type SnackGetAllResponseDto } from './dtos/snack-get-all-response.dto';
import { createSnackGetResponseDto, type SnackGetResponseDto } from './dtos/snack-get-response.dto';
import { createSnackFromPostRequestDto, type SnackPostRequestDto } from './dtos/snack-post-request-dto';
import { createSnackPostResponseDto, type SnackPostResponseDto } from './dtos/snack-post-response.dto';

@Controller('/snacks')
export class SnackController {
	constructor(private readonly snackService: SnackService) {}

	@Get()
	getAll(): SnackGetAllResponseDto {
		return {
			snacks: this.snackService.getAll().map(s => createSnackGetAllSnackDto(s)),
		};
	}

	@Get('/:id')
	get(@Param('id') id: string): SnackGetResponseDto {
		// TODO: Valideer dat id een getal is
		// ...

		// retrieve and return
		let snack = this.snackService.get(+id);
		if (!snack) {
			throw new NotFoundException(`Snack met ID ${+id} niet gevonden`);
		}

		return createSnackGetResponseDto(snack);
	}

	@Post()
	@HttpCode(201)
	post(@Body() dto: SnackPostRequestDto): SnackPostResponseDto {
		// TODO: IMPLEMENTEER VALIDATIE
		// ...

		// add
		let updatedSnack = this.snackService.add(createSnackFromPostRequestDto(dto));
		return createSnackPostResponseDto(updatedSnack);
	}
}
