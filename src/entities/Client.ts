import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { Person } from './utils/Person';

@Entity('client')
export class Client extends Person {

    @Column({
        unique: true,
        length: 10
    })
    card_number: string;

    @Column({
        type: "numeric"
    })
    balance: number;

    @Column({
        default: true,
        name: 'active'
    })
    is_active: boolean;

    @Column({
        type: 'simple-json',
        nullable: true
    })
    additional_info: {
        age: number;
        color: string
    }

    @Column({
        type: 'simple-array',
        default: []
    })
    family_numbers: string[];

}