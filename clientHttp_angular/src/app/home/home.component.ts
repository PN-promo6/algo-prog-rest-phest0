import { Component, OnInit } from '@angular/core';
import { DatasService } from '../services/datas.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private datasService: DatasService) { }

  ngOnInit(): void {
    this.datasService.getAlbums();
    this.datasService.getLabels();
  }

}
