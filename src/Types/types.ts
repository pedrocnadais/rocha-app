import { StaticImageData } from "next/image";

export interface Property {
 title: string;
 location: string;
 size: string;
 rooms: number;
 latitude?: number;
 longitude?: number;
 imageUrl?: StaticImageData;
 airbnbLink?: string; 
}

export interface Place {
 name: string;
 address: string;
 type: string;
 latitude: number;
 longitude: number;
}