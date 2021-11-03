import { Controller, Get } from '@nestjs/common';

@Controller('lazer')
export class LazerController {
    @Get()
    async index(){
        return [
            { 
                nome: 'Jogar The Sims 4',
            },
            { 
                nome: 'Contar histórias',
            },
            { 
                nome: 'Falar em inglês consigo mesmo',
            },
            { 
                nome: 'Ouvir gringos conversando',
            },
        ] 
    } 
}
