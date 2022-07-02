/*
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Patch(':studentId/user/userId')
  setUserById(@Param('studentId') studentId: 
  number, @Param('userId') userId: number) {
    return this.studentsService.setUserById(studentId, 
  userId);
  }
  
  @Delete(':studentId/user')
  unsetUserById(@Param('studentId') studentId: 
  number) {
  return this.studentsService.unsetUserById(studentId);
  }
}
*/

import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get('create')
  @Render('students/create-students.html')
  createform(){
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }

  /*

  @Put(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }

   Work on relationships 

  @Patch(':studentId/user/userId')
  setUserById(@Param('studentId') studentId: string, @Param('userId') userId: string) {
    return this.studentsService.setUserById(+studentId, +userId);
  }

  @Delete(':studentId/user')
  unsetUserById(@Param('studentId') studentId: string) {
    return this.studentsService.unsetUserById(+studentId);
  }
  */
  
}
