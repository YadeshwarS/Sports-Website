import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { Student } from '../store.service';

@Component({
  selector: 'app-tb',
  templateUrl: './tb.component.html',
  styleUrls: ['./tb.component.css']
})
export class TbComponent implements OnInit {

  studentsList: Student[] = [];
  studentObj: Student = {
    id: '',
    playername: '',
    schoolname: '',
    sportsname: '',
    date: ''

  };

  id: string='';
  playername: string='';
  schoolname: string='';
  sportname: string='';
  date: any='';

  constructor(private auth: AuthService, private data: DataService) { }

file: any;
getFile(event: any){
  this.file=event.target.files[0];

 
 
  console.log('file', this.file);
}

  ngOnInit(): void {
  this.getAllStudents();
  }
  tb(){
      
    if(this.playername == ''){
      alert('please enter playername');
      return;
    }
  if(this.sportname == ''){
    alert('please enter sports name')
  }
     if(this.schoolname == '') {
      alert('please enter schoolname');
      return;
     }
     
     if(this.date ==''){
      alert('please enter date of match played');
      return;
     }
     this.playername='';
     this.schoolname = '';
     this.sportname = '';
     this.date='';
  }
  getAllStudents(){
    this.data.getAllStudents().subscribe(res=>{
      this.studentsList = res.map((e:any)=>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    },err=>{
      alert('Error while Fetching data');
    })
  }

  resetForm(){
    this.id = '';
    this.playername = '';
    this.schoolname = '';
    this.sportname = '';
    this.date = '';
  }

  addStudent(){
    if(this.id||this.playername==''||this.schoolname==''||this.date==''||this.sportname==''){
      alert('Fill all Input Field');
      return;
    }
    else{
      alert('SucessFully registered');
    }

    this.studentObj.id = '';
    this.studentObj.playername = this.playername;
    this.studentObj.schoolname = this.schoolname;
    this.studentObj.sportsname = this.sportname;
    this.studentObj.date = this.date;

    this.data.addStudent(this.studentObj);
    this.resetForm();
  }

  updateStudent(){

  }

  deleteStudent(student : Student){
    if(window.confirm('Are you Sure you Want to delete'+ student.playername +''+student.schoolname+'')){
      this.data.deleteStudent(student);
    }
  }
}
