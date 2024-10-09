import { AdviceService } from './../../service/advice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent implements OnInit {
  slip: any = null; 
  constructor(private adviceService:AdviceService){}
  ngOnInit(): void {
    this.fetchAdvice();
  }

  fetchAdvice(){
    this.adviceService.getAdvice().subscribe((response: any) => {
      this.slip = response.slip
    })
  }
}
