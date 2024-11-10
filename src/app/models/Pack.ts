import { Activity } from "./Activity";

export interface Pack {
    packId: number;
    type: string;
    duree: string;
    prix: string;
    description: string;
    activities: Activity[]; // Assuming Activity is another interface defined below
}