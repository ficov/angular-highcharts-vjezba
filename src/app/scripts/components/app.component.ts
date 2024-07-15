import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { FormGroup, FormBuilder} from '@angular/forms';
import { GetMeasuresService } from '../services/get-measures.service';

@Component({
  selector: 'app-root',
  templateUrl: '../../templates/app.component.html',
  styleUrls: ['../../assets/css/app.component.css']
})
export class AppComponent {

  private measures: any;
  chart = new Chart()
  dateRangeForm: FormGroup;
  dataY: any
  dataX: any

  
  constructor(private service: GetMeasuresService, private fromB: FormBuilder){
    this.dateRangeForm = this.fromB.group({
      startDate: [''],
      endDate: ['']
    })
  }

  title = 'highcharts_tutorial';

  ngOnInit() {
    this.service.getMeasuers().subscribe(mes => {
      this.measures = mes
      this.dataY = this.measures.result.map((res: { vrijednosti: any; }) => res.vrijednosti.map((res: { vrijednost: any; }) => res.vrijednost))
      this.dataX = this.measures.result.map((res: { termin: string; }) => res.termin)
      this.initChart()
    })
  }

  initChart() {
    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      yAxis: {
        title: {
            text: 'Vrijednost'
        }
      },
      xAxis: {
        categories: this.dataX,
        tickInterval: 12,
        labels: {
          formatter: function() {
            return (this.value as string).split(" ")[1].split(":")[0] + ":" + (this.value as string).split(" ")[1].split(":")[1] + '<br/>' + 
            (this.value as string).split(" ")[0].split("-")[2] + "." + 
            (this.value as string).split(" ")[0].split("-")[1] + "." +(this.value as string).split(" ")[0].split("-")[0]
          }
        }
      },
      series: [
        {
          name: this.measures.result[0].vrijednosti[0].meteoMjerniElementId,
          data: this.dataY
        } as any
      ]
    });
  }

  onSubmit() {
    let newData = this.filterData()
    this.dataX = this.measures.result.map((res: { termin: string; }) => res.termin).filter((res: string) => {
      return newData.includes(res.split(" ")[0]) 
    })
    
    this.dataY = this.measures.result.
    filter((res: { termin: string; }) => {
      return newData.includes(res.termin.split(" ")[0])
    }).map((res: { vrijednosti: any; }) => res.vrijednosti.map((res: { vrijednost: any; }) => res.vrijednost))
    this.initChart()
  }

  filterData() {
    const { startDate, endDate } = this.dateRangeForm.value
    let start =new Date(startDate)
    let end = new Date(endDate)
    let filteredDate = this.measures.result.map((res: { termin: any; }) => res.termin).map((res: string) => res.split(" ")[0]).filter((res: string) => {
      return (new Date(res) >= start && new Date(res) <= end);
    })
    let finalResult = filteredDate.filter(function(elem: any, index: any, self: string | any[]) {
      return index === self.indexOf(elem);
  })
  return finalResult
  }
}
