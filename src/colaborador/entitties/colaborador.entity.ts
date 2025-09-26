import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_colaboradores' })
export class Colaborador {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 45, nullable: false })
  cpf: string;

  @Column({ type: 'date', nullable: false })
  data_nasc: Date;

  @Column({ type: 'date', nullable: false })
  data_admissao: Date;
}
