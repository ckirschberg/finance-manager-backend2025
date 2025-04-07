import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Entry } from "../../entries/entities/entry.entity"
import { UserEntity } from "../../authentication/entities/user.entity"

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({ default: '' })
    description: string

    @OneToMany(() => Entry, (entry) => entry.category)
    entries: Entry[]

    @ManyToOne(() => UserEntity, (user) => user.categories /*, {
        eager: true
    }*/)
    user: UserEntity
}
