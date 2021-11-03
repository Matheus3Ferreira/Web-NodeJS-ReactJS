import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm'
import { FormacaoController } from './formacao/formacao.controller';
import { ProjetosController } from './projetos/projetos.controller';
import { ExperienciaController } from './experiencia/experiencia.controller';
import { LazerController } from './lazer/lazer.controller';
import { DadospessoaisController } from './dadospessoais/dadospessoais.controller';
import { ClientController } from './Client/client.controller';
import { Client } from './models/client.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Client],
      synchronize: true,
      cli: {
        entitiesDir: "src/models"
      }
    }),
    TypeOrmModule.forFeature([Client]),
  ],
  controllers: [AppController, FormacaoController, ProjetosController, ExperienciaController, LazerController, DadospessoaisController, ClientController],
  providers: [AppService],
})
export class AppModule {}
