import { Controller, Get } from '@nestjs/common';

@Controller('experiencia')
export class ExperienciaController {
    @Get()
    async index(){
        return[ 
            { 
                cargo: 'Auxiliar administrativo',
                meses: 35,
                empresa: 'Primeiro Cartório de Registro Civil das Pessoas Naturais da Comarca de Santos'
            }, {
                cargo: 'To com preguiça',
                meses: 99,
                empresa: 'Quero fazer mais rapido'
            }
        ]
    } 
}
