import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Person } from "./utils/Person";

@Entity('banker')
export class Banker extends Person {

    @Column({
        unique: true,
        length: 10
    })
    card_number: string;

    @Column({
        length: 10,
        unique: true
    })
    employee_number: string
}