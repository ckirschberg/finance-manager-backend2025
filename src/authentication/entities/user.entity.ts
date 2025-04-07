import { Category } from '../../categories/entities/category.entity';
import { Role } from '../../users/role';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    type:"enum", 
    enum: Role, 
    default: [Role.User]
  })
  role: Role;

  // @OneToMany(() => Category, (category) => category.user)
  // categories: Category[]
}