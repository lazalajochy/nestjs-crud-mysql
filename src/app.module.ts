import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'12345678',
      database:'nest',
      entities:[__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true
    }),


    PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
