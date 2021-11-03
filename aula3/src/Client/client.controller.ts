import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/models/client.model';
import { Repository } from 'typeorm';

@Controller('client')
export class ClientController {
    
    constructor(
        @InjectRepository(Client) //Este decorator Inject que está pegando o repositório.
        private clientRepo: Repository<Client> //Generic 
    ){}

    @Get()
    async index(): Promise<Client[]>{
        return this.clientRepo.find()
    }
    
    @Get(':id')
    show(@Param('id') id: string): Promise<Client>{
        return this.clientRepo.findOneOrFail(id)
    }

    @Post()
        async store(@Body() body: Client): Promise<Client> {
        const client = this.clientRepo.create(body); // <---Até aqui só instanciamos o objeto, ainda não gravamos no banco
        return this.clientRepo.save(client); // <--- Agora da o Insert.
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: Client): Promise<Client> {
        await this.clientRepo.findOneOrFail(id);
        this.clientRepo.update({id: +id}, body);
        return this.clientRepo.findOneOrFail(id);
    }

    @Delete(':id')
    @HttpCode(204)
    async destroy(@Param('id') id: string): Promise<void> {
        await this.clientRepo.findOneOrFail(id);
        this.clientRepo.delete(id);
    }
}
