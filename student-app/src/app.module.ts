
import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/databse.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [DatabaseModule,StudentsModule],
  
})
export class AppModule {}
