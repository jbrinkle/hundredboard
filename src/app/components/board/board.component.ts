import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  cells: Array<Array<number>> = [];

  constructor() {
    for (let r = 0; r < 10; r++) {
      const row = [];
      for (let c = 1; c <= 10; c++) {
        row.push(r * 10 + c);
      }
      this.cells.push(row);
    }
  }

  ngOnInit(): void {
  }

}
