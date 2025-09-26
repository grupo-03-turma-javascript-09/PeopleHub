import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { Colaborador } from '../entitties/colaborador.entity';
import { ColaboradorService } from '../services/colaborador.serivce';

@Controller('/colaboradores')
export class ColaboradorController {
  constructor(private readonly colaboradorService: ColaboradorService) {}

  @Get()
  @HttpCode(HttpStatus.ok)
  findAll(): Promise<Colaborador[]> {
    return this.colaboradorService.findAll();
  }
}
