import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {
  @Input() page: number;
  @Input() count: number;
  @Input() perPage: number;
  @Input() totalPages: number;

  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * To get previous page
   */
  onPrev(): void {
    this.goPrev.emit();
  }

  /**
   *  To get next page
   *
   */
  onNext(): void {
    this.goNext.emit();
  }
}
