import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CrudService } from '../services/crud.service';


@Component({
  selector: 'app-user-dashboard-registered-graph',
  templateUrl: './user-dashboard-registered-graph.component.html',
  styleUrls: ['./user-dashboard-registered-graph.component.css']
})
export class UserDashboardRegisteredGraphComponent implements OnInit {

  data: any = [];
  month: any = [];
  year: any = [];
  constructor(
    private http: CrudService
  ) { }
  ngOnInit() {
    this.getTableData();
    this.data = new Array<any>();
    this.month = new Array<any>();
    this.month = new Array<any>();

  }
  getTableData() {
    this.http.getData().subscribe((d) => {
      for (let entry of d) {

        let createdDate = entry.createdAt
        let day = createdDate.split('-')[2].substring(0, 2)
        let month = createdDate.split('-')[1];
        let year = createdDate.split('-')[0];
        console.log(month + " " + year + " " + day);
        this.month = month;
        this.year = year;
      }
      this.data = d;
      // console.log(d.createdAt);
      console.log(d);
    })
  }




  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        ticks: {
          stepSize: 10,
        },
        stacked: true,
        gridLines: {
          lineWidth: 0,
          color: "rgba(0,0,0,0)"
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          min: 0,
          stepSize: 10
        }


      }]
    }
  };
  barChartColor: Color[] = [{ backgroundColor: 'rgb(77,184,255)' }];
  barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      label: 'Registered Users',
      barThickness: 16,
      barPercentage: 0.5,
      data: [39, 28, 33, 38, 32, 25, 34, 20, 33, 21, 30, 17]
    }
  ];
}
