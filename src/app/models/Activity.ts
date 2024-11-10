import { Pack } from "./Pack";

export interface Activity {
    activityId: number;
    time: string;
    detail: string;
    packs: Pack[]; // Assuming Pack is another interface defined above
}