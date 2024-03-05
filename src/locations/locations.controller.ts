import { Controller, Post, Body, Get } from "@nestjs/common";

import { LocationsService } from "./locations.service";

@Controller('locations')
export class LocationsController {
    constructor(private readonly locationsService: LocationsService) {}

    @Post()
    addLocation(
        @Body('name') locationName: string, 
        @Body('country') country: string, 
        @Body('description') locationDescription: string, 
        
    ): any {
        const generatedId = this.locationsService.insertLocation(
            locationName,
            country,
            locationDescription,
            
        );
        return { id: generatedId };
    }

    @Get()
    getLocations() {
        return this.locationsService.getLocations();
    }

}

