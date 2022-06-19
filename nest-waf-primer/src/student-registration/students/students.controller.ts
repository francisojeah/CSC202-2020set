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
