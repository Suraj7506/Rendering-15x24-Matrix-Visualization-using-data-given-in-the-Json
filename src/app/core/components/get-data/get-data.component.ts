import { Component,OnInit } from '@angular/core';
import { DataGetService } from '../../service/data-get.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  matrixData: any[] = [];

  constructor(private httpClient: HttpClient,private dataGetService: DataGetService) {}

  ngOnInit(): void {
    this.dataGetService.getDataFromJson().subscribe(data => {
      this.matrixData = data // Perform further operations with the fetched data
      console.log(data);
    });
  }

  getBoxColor(recordCount: number): string {
    if (recordCount === 0) {
      return 'grey';
    } else {
      const maxCount = 1000;
      const opacity = (recordCount / maxCount) * 100;
      return `rgba(0, 128, 0, ${opacity}%)`;
    }
  }

}
