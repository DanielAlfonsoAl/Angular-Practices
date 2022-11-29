import { Component, OnChanges , OnInit , OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges , OnInit , OnDestroy {

  ngOnChanges(changes: SimpleChanges): void {
  console.log('change ->' , changes);

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('OnInit ->');
  }
  ngOnDestroy(): void {
      console.log('Destroy');
      
  }

  selection:string = '';

  citys:string[] = ["Barcelona" , "Colombia" , "España" , "Argentina", "Italia"]

  
  title = 'dia_1';
  name:string = "";

}
