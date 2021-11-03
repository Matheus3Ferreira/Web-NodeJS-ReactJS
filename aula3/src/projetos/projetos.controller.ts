import { Controller, Get } from '@nestjs/common';

@Controller('projetos')
export class ProjetosController {
    @Get()
    async index(){
        return [
            { 
                nome: 'O Pensador',
                link: 'https://www.naoexiste.com.br',
                linguagens: 'sinapse'
            }
        ] 
    } 
}
