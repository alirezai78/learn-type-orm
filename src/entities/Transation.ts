import { BaseEntity, Column, CreateDateColumn, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Client } from "./Client";

export enum TransactionType {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw'
}

export class Transaction extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: TransactionType
    })
    type: string;

    @Column({
        type: 'numeric'
    })
    amount: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Client,
        (client) => client.transactions,
        {
            onDelete: 'CASCADE'
        })
    @JoinColumn({
        name: 'client_id'
    })
    client: Client
}