import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import {ConfigModule} from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentRegistrationModule } from './student-registration/student-registration.module';

@Module({
  imports: [
    //ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "postgres",
    database: "nestwafprimer",
    entities: [
      "dist/**/*.entity{.ts,.js}"
    ],
    synchronize: true
  }), StudentRegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}