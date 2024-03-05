import { Injectable } from "@nestjs/common";

import { Location } from "./location.model";

@Injectable()
export class LocationsService {

    locations: Location[] = [];
     
    insertLocation(name:string, description:string, country: string) {
        const locId = Math.random().toString();
        const newLocation = new Location(locId, name, description, country);
        this.locations.push(newLocation);
        return locId;
    }

    getLocations() {
        return [...this.locations];
    }


}