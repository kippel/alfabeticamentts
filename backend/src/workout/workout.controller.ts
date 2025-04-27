import { Controller, Get } from '@nestjs/common';
//import { PrismaService } from 'src/prisma/prisma.service';
import { WorkoutService } from 'src/workout/workout.service'

@Controller('workout')
export class WorkoutController {
    constructor(private readonly workoutService: WorkoutService) {}

    @Get("/")
    async getAllWorkouts() {
        return await this.workoutService.getAllWorkouts();
    }

}
