export class StudentPutResponse {

    constructor(
        public id: string,
        public name: string,
        public birthday: string,
        public active: boolean
    ) { }

}


export class StudentPostResponse {

    constructor(
        public name: string,
        public birthday: string,
        public active: boolean
    ) { }

}

export class Student {

    constructor(
        public id?: string,
        public name?: string,
        public birthday?: Date,
        public active?: boolean,
        public editing?: boolean,
        public saving?: boolean
    ) { }

}