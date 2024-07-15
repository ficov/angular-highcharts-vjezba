export interface Measure {
    result: InnerArray[];
    succes: boolean;
}

export interface InnerArray {
    termin: string;
    vrijednosti: VrijednostiArray[];
}

 export interface VrijednostiArray {
    meteoMjerniElementId: number,
    postajaId: number,
    vrijednost: number,
    vrijednostTablica: string,
    komentar: string,
    status: string,
    showComment: boolean,
    showStatus: boolean
 }
