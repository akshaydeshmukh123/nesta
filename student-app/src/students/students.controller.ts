import { Controller, Put, Get, Patch, Post, Body, Delete, Param } from "@nestjs/common";

import { StudentsService } from "./students.service";

import { CreateStudentDto } from "./dto/create-student.dto";

import { UpdateStudentDto } from "./dto/update-student.dto";


@Controller('Students')

export class StudentsController{
    constructor(private readonly studentsService: StudentsService) { }
    

    @Post()

    create(@Body() createStudent: CreateStudentDto) {
        
        return this.studentsService.create(createStudent)
    }

    @Get()

    findAll() {
        return this.studentsService.findAll()
    }

    @Get(':id')

    findOne(@Param('id') id:number) {
        return this.studentsService.findOne(id)
    }


    @Put(':id')

  @Put(':id')
  update(@Param('id') id: number, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(id, updateStudentDto);
    }
    
    @Delete(':id')

    delete(@Param('id') id:number) {
        return this.delete(id)
    }

}