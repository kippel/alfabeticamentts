import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { WorkoutModule } from './workout/workout.module';


@Module({
  imports: [WorkoutModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
