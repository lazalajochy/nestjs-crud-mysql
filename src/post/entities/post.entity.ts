import { text } from "stream/consumers";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar', nullable: false})
    slug!: string;

    @Column({type:'varchar', length:255})
    title!: string;

    @Column({type:'varchar', length:255})
    excerpt?: string;

   
    @Column({type:'text'})
    content!: string;

    @Column({type:'varchar', length:255})
    category: string;

    @Column({type:'varchar', length:255})
    tags: string[];
    status: boolean;

    @CreateDateColumn({type:'timestamp'})
    createdAt: Date;
}