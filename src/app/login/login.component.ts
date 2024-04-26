import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CatComponent } from '../dummy/cat/cat.component';
import { CowComponent } from '../dummy/cow/cow.component';
import { DogComponent } from '../dummy/dog/dog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
//dummyComponent!: string;
dummyComponent = DogComponent;

username:string = "";
firstName:string = "John";

assignComponent(dummyName:string){
  if(dummyName==='cow'){
    this.dummyComponent = CowComponent;
  } 
  else if(dummyName==='cat'){
    this.dummyComponent = CatComponent;
  }
  else if(dummyName==='dog'){
    this.dummyComponent = DogComponent;
  }
}

@ViewChild('placeholder') placeholderRef!: ElementRef;

doSomething():void{
  console.log('Button clicked!');
}

}


