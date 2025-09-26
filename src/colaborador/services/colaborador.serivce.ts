import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';
import { Colaborador } from './../entitties/colaborador.entity';

@Injectable()
export class ColaboradorService {
  constructor(
    @InjectRepository(Colaborador)
    private colaboradorRepository: Repository<Colaborador>,
  ) {}

  async findAll(): Promise<Colaborador[]> {
    return await this.colaboradorRepository.find();
  }

  async findById(id: number): Promise<Colaborador> {
    const colaborador = await this.colaboradorRepository.findOne({
      where: {
        id,
      },
    });

    if (!colaborador) {
      throw new HttpException(
        'Colaborador não encontredo',
        HttpStatus.NOT_FOUND,
      );
    }

    return colaborador;
  }

  async findByNome(nome: string): Promise<Colaborador[]> {
    const colaborador = await this.colaboradorRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });

    if (!colaborador) {
      throw new HttpException(
        'Colaborador não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return colaborador;
  }

  async create(colaborador: Colaborador): Promise<Colaborador> {
    return await this.colaboradorRepository.save(colaborador);
  }

  async update(colaborador: Colaborador): Promise<Colaborador> {
    await this.findById(colaborador.id);

    return await this.colaboradorRepository.save(colaborador);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.colaboradorRepository.delete(id);
  }
}
