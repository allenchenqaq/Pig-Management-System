import {Pig} from './Pig'

// pass attributes...
// instantiate objects...
// set and get for local storage

export interface PigServices{
    add(p:Pig):void;
    getAll():Pig[];
    delete(i:number):void;
}

export class PigController implements PigServices{
    storeKey: string = "pig";
    pigs: Pig[];
    typeResult: String[];
    nameResult: String[];
    constructor() {
        if (JSON.parse(localStorage.getItem(this.storeKey)!) == null) {
            this.pigs = [];
        } else {
            this.pigs = JSON.parse(localStorage.getItem(this.storeKey)!);
        }
        this.typeResult = [];
        this.nameResult = [];
    }

    add(d: Pig) {
        this.pigs.push(d);
        localStorage.setItem(this.storeKey, JSON.stringify(this.pigs));
    }
 
    getAll(){
        return this.pigs;
    }

    delete(i: number) {
        this.pigs.splice(i, 1);
        localStorage.clear();
        localStorage.setItem(this.storeKey, JSON.stringify(this.pigs));
    }
}


