import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StepperDomManipulationService } from 'app/stepper/stepper/stepper-dom-manipulation.service';

@Component({
  selector: 'jhi-component-cession-creance',
  templateUrl: './component-cession-creance.component.html',
  styleUrls: ['./component-cession-creance.component.scss']
})
export class ComponentCessionCreanceComponent implements OnInit  {
  private slideIndex = 1;
  p;

  constructor(protected activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  dismissModal() {
    this.activeModal.dismiss();
  }

  getHtmlInputElement(inputId: string): HTMLInputElement {
    return StepperDomManipulationService.getHTMLInputElement(inputId);
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute('style', 'display:none');
    }
    slides[this.slideIndex - 1].setAttribute('style', 'display:block');
  }
}

