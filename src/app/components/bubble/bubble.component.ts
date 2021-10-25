import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss'],
})
export class BubbleComponent implements OnInit {
  @Input() data: any;
  @Input() size: any;
  @Input() isSubCluster: any;
  @Input() lowestScore: any;
  // @Output() setLowestScore = new EventEmitter<any>();

  circleSize!: number;
  fontSize!: number;

  constructor() {}

  ngOnInit(): void {
    const calc = this.size * 100;
    this.circleSize = calc != 0 ? calc * 0.1 - 1 : 5;
    this.fontSize = calc != 0 ? (calc / 100) * 1.1 : 0.7;
    // this.setLowestScore.emit(calc);
  }
}
