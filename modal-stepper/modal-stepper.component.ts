import { Component, OnInit, Input } from '@angular/core';
import { ModalStepper } from '../common/modal-stepper.model';

@Component({
  selector: 'app-modal-stepper',
  templateUrl: './modal-stepper.component.html',
  styleUrls: ['./modal-stepper.component.scss']
})

export class ModalStepperComponent implements OnInit {

  // Model containing the list to display and the selected index
  @Input() modalStepper: ModalStepper;

  constructor() {
  }

  ngOnInit() {
  }

}
