import { Injectable } from "@nestjs/common";

import { DatabaseService } from "src/database/databse.service";
import { CreateStudentDto } from "./dto/create-student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";

@Injectable()

export class StudentsService{

    constructor(private readonly databaseService: DatabaseService) { }

    async create(createStudentDto: CreateStudentDto) {
           const { name, age, grade } = createStudentDto;
        return this.databaseService.callProcedure('createStudent', [
           name,
           age,
           grade
        ])
    }

    async findAll() {
    return  this.databaseService.callProcedure('getStudents',[])
}

    async findOne(id: number) {
        return this.databaseService.callProcedure('getStudentByStudent',[id])
        
    }

    async update(id: number, updateStudentDto: UpdateStudentDto) {
         const { name, age, grade } =updateStudentDto
        return this.databaseService.callProcedure('updateStudent', [
            id,
            name,
            age,
            grade
        ])
    }

    async remove(id: number) {
    return this.databaseService.callProcedure('deleteStudent',[id])
}
}