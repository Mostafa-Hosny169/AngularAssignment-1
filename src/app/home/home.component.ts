import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   userName:string='';
   checkInput:boolean = false;
   clickButton:boolean = false;
   checkClass:boolean = true;
   itrator:number=0
   numOfClicks:number[] = [];
   pragraphStyle = {"background-color":"blue"};
   pragraphClass = {"color":this.checkClass}

   

   OnKeyIpnut():void{
      if (this.userName=='') 
        this.checkInput = false;
    
      else
        this.checkInput = true;
   }

   resetInput():void{
      this.userName = '';
      this.checkInput = false;
   }

   onClickButton():void{
      this.itrator+=1;
      this.numOfClicks.push(this.itrator);
      this.clickButton = !this.clickButton;
   }
}
