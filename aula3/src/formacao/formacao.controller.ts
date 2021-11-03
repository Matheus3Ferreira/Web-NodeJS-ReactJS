import { Controller, Get } from '@nestjs/common';

@Controller('formacao')
export class FormacaoController {
    @Get()
    async index(){
        return [
            { 
                nome: 'Ensino Médio',
                nivel: 'ensino médio',
                finaliza_em: 2015,
                duracao_semestres: 6
            },
            { 
                nome: 'Ensino Médio',
                nivel: 'superior tecnologo',
                finaliza_em: 2021,
                duracao_semestres: 4
            }
        ] 
    } 
}
