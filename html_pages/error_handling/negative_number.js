//custom or user defined error
export default class NegativeNumbers extends Error{
    constructor(message){
        super(message);
        this.name = "Negativenumbers";
    }
}


