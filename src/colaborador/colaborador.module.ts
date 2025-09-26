import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColaboradorController } from './controllers/colaborador.controller';
import { Colaborador } from './entitties/colaborador.entity';
import { ColaboradorService } from './services/colaborador.serivce';

@Module({
  imports: [TypeOrmModule.forFeature([Colaborador])],
  controllers: [ColaboradorController],
  providers: [ColaboradorService],
  exports: [],
})
export class ColaboradorModule {}
