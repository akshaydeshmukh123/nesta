import { Module } from "@nestjs/common";

import { StudentsController } from "./students.controller";

import { StudentsService } from "./students.service";

import { DatabaseModule } from "src/database/databse.module";

@Module({

    imports: [DatabaseModule],
    controllers: [StudentsController],
    providers:[StudentsService]
})

export class StudentsModule{}