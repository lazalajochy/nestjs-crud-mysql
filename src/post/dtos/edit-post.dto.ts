import { PostDto } from "./post.dto";
import {PartialType, OmitType} from '@nestjs/mapped-types'

export class EditPostDto extends PartialType(
    OmitType(PostDto,['slug'] as const)
){}