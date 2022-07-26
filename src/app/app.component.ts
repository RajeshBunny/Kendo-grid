import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  gridData: any = [];

  public mySelection: string[] = [];
  constructor(private _svc: ProductService) {

  }
  ngOnInit(): void {
    this.loadDetails();
  }

  loadDetails() {
    this._svc.getDataFromServer().subscribe((res: any) => {
      this.gridData = res;
    })
  }
}
