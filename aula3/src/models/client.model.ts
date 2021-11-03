import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nome: string;
    
    @Column()
    telefone: string;
    
    @Column()
    idade: number;
    
    @Column()
    profissao: string;
    
    @Column()
    email: string;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updated_at: Date;
}
