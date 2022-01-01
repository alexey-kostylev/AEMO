import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Energy } from '../models';

@Component({
  selector: 'app-energy-list',
  templateUrl: './energy-list.component.html',
  styleUrls: ['./energy-list.component.scss'],
})
export class EnergyListComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();

  items: Energy[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.onDestroy$)).subscribe((x) => {
      this.setRows(x.items);
    });
  }

  private setRows(rows: Energy[]) {
    this.items = rows;
  }

  ngOnDestroy(): void {
    this.onDestroy$.complete();
  }
}
