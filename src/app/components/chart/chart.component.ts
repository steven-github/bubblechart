import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/shared/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  animations: [
    trigger('expandSkill', [
      state('in', style({ width: 'auto' })),
      transition('void => *', [
        style({ width: '0' }),
        animate('1000ms ease-in-out'),
      ]),
    ]),
  ],
})
export class ChartComponent implements OnInit {
  data: any;
  dataBackup: any;
  isSubCluster!: boolean;
  lowestScore!: number;

  constructor(private _service: ChartService) {}

  ngOnInit(): void {
    this._service.getData().subscribe((data) => {
      console.log('data', data);
      this.data = data;
      this.dataBackup = data;
    });
  }

  viewSubClusters(item: any) {
    if (item.SubClusters) {
      this.isSubCluster = true;
      this.data = item.SubClusters;
    }
  }

  loadCloasters() {
    if (JSON.stringify(this.data) !== JSON.stringify(this.dataBackup)) {
      this.isSubCluster = false;
      this.data = this.dataBackup;
    }
  }

  // setLowestScore(calc: any) {
  //   if (this.lowestScore == undefined) {
  //     this.lowestScore = calc;
  //   }
  //   if (calc != 0 && this.lowestScore > calc) {
  //     this.lowestScore = calc;
  //   }
  // }
}
