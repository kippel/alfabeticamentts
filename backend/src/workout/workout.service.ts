import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WorkoutService {

    constructor(private prisma: PrismaService) {}

    async getAllWorkouts() {
        return await this.prisma.silaba.findMany();
    }


}
