import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  passLength: number = 0;
  generatedPass: string= ' '; //Declaring

  includeChar: boolean = false;
  includeNum: boolean = false;
  includeSym: boolean = false;

  getLength(length: string){
    //+ is parseInteger to change type
    this.passLength =+ length;
    
  }
  includeCharacter(){
    this.includeChar =! this.includeChar
    //console.log(this.includeChar);
    
  }

  includeNumber(){
    this.includeNum =! this.includeNum;
    //console.log(this.includeNum);

  }

  includeSymbol(){
    this.includeSym =! this.includeSym;
    //console.log(this.includeSym);

  }
  genPass(){
    this.generatedPass = " "; //when we add new value it add ons on previous, so before running again empty it.
    let validChar = '';

    if(this.includeChar){
      validChar += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if(this.includeNum){
      validChar += '1234567890';
    }

    if(this.includeSym){
      validChar += '!@#$%*';
    }

    for(var s = 0; s < this.passLength; s++){
      this.generatedPass += validChar.charAt(Math.random()*validChar.length);
    }
    console.log(this.generatedPass);   
  }
}
