import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chartApp';
  public enableChart = false;
  
  // lineChart
  public lineChartData:Array<any>;
  public lineChartLabels:Array<any> = [1990,1991,1992,1993,1995,1996,1997,1998,1999,1999,2000];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  changeListener($event): void {
            this.readThis($event.target);
        }

    readThis(inputValue: any): void {
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();
        var fileType = inputValue.parentElement.id;

        myReader.onload = (e) => {
          let temp1 = this.csvJSON(myReader.result);
          this.enableChart = true;
          console.log(temp1);
          this.lineChartData = this.csvJSON(myReader.result);
        }
        
        myReader.readAsText(file);
    }


    public csvJSON(csv) {
      var lines = csv.split("\n");
      var headers = lines[0].split(",");
      var result = [];
      for (var i = 0; i < lines.length; i++) {
          var obj:any = [];
          var currentline = lines[i].split(",").sort();
          for (var j = 0; j < headers.length-1;j++ ) {
              obj.push(currentline[j].slice(-2));
          }
          let temp = {data : obj, label : currentline.slice(-1)}
          result.push(temp) 
      }
      return result; //JSON
  }
}
