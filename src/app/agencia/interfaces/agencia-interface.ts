export interface Agencia {
    id?:number;
    agencia: string;
    distrito: string;
    provincia: string;
    departamento: string;
    direccion: string;
    lat: number;
    lon: number;
    imagen?:string;

}

export interface Coordenadas{
    lat: number;
    lon: number;
}