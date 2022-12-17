import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { PostCategory } from "../enums";
import {EnumToString} from "../../helpers/enumToString"

export class PostDto {
    @IsString()
    title: string;

    @IsString()
    slug: string;

    @IsString()
    excerpt: string;

    @IsString()
    content: string;

    @IsNotEmpty()
    @IsEnum(PostCategory, {
        message: `Datos incorrecto, las opciones validas son ${EnumToString(PostCategory)}`
    })
    category: PostCategory;
    
    @IsArray()
    @IsString({each: true})
    tags: string[];

    @IsBoolean()
    status: boolean;
}