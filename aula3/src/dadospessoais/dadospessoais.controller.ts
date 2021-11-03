import { Controller, Get } from '@nestjs/common';

@Controller('dadospessoais')
export class DadospessoaisController {
    @Get()
    async index(){
        return { nome: 'Matheus',
        idade: 23,
        email: 'ferreiromagrelo@gmail.com',
        profissao: 'nerd'}
    } 
}
