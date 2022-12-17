import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EditPostDto } from './dtos/edit-post.dto';
import { PostDto } from './dtos/post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {

    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>
    ){}
    
   async getMany(){
        return await this.postRepository.find();
    }
    async getOne(id:number){
        const post = await this.postRepository.findOne({
            where:{
                id:id
            }
        })
        if(!post) throw new Error("No hay datos");
        return post;
    }
    async createOne(dto:PostDto){
        const post = this.postRepository.create(dto as any)
        return await this.postRepository.save(post);
    }


    async editOne(id:number, dto: EditPostDto){
        const post = await this.postRepository.findOne({
            where:{
                id:id
            }
        })

        if(!post) throw new Error("No hay datos para ");
        
        const editPost = Object.assign(post, dto);
        return await this.postRepository.save(editPost);
        
    }
    async deleteOne(id:number){
        return await this.postRepository.delete(id)
    
    }
}
