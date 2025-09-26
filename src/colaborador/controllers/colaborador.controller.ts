import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { Colaborador } from '../entities/colaborador.entity';
import { ColaboradorService } from '../services/colaboradores.service';

@Controller('/colaborador')
export class ColaboladoresController {
  constructor(private readonly colaboradoresService: ColaboradoService) {}

  @Get()
  @HttpCode(HttpStatus.ok)
  findAll(): Premise<Colaborador[]> {
    return this.colaboradoresService.findAll();
  }
}
