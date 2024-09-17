export const GOOGLE_MAPS_API = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API;
export const MAP_ID = process.env.NEXT_PUBLIC_MAP_ID as string;

if (!GOOGLE_MAPS_API) {
 throw new Error("GOOGLE_MAPS_API_KEY is not defined in .env.local");
}

if (!MAP_ID) {
 throw new Error("MAP_ID is not defined in .env.local");
}