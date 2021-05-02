import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service'
interface IStageObj{
  color:string;
  image:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inbetween-test';
  public colorsList:any[];
  public imageList:any[];
  public stageObjList:IStageObj[]=[];
  constructor(public dataService: DataServiceService){
    //this.stageObjList.push({color:'',image:''});
    this.dataService.getColors().subscribe((data) => {
      this.colorsList=data;
      //this.stageObjList[0].color=this.colorsList[0];
    });
    this.dataService.getImages().subscribe((data) => {
      this.imageList=data;
      //this.stageObjList[0].image=this.imageList[0];
    });
  }
  public drop(event,div){
    console.log('div',div)
    if(event.container!=event.previousContainer && div=='stage'){

      if(event.previousContainer.id=='cdk-drop-list-0'){
        let newStageObj={color:'',image:''};
        newStageObj.color=this.colorsList[event.previousIndex];
        this.colorsList.splice(event.previousIndex,1);
        this.stageObjList.push(newStageObj);
        console.log(this.stageObjList);
      }
      if(event.previousContainer.id=='cdk-drop-list-2'){
        let isset=0;
        this.stageObjList.forEach(data=>{
          if(!isset && data.color!='' && data.image==''){
            data.image=this.imageList[event.previousIndex];
            this.imageList.splice(event.previousIndex,1);
            isset=1;
            console.log(this.stageObjList);
          }
        })
      }
    }
  }
}
