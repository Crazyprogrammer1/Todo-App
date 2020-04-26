import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  item:string = '';

  constructor() { }

  ngOnInit() {
  }

  submitValue() {
    this.submit.emit(this.item);
    this.item = '';
  }
}
