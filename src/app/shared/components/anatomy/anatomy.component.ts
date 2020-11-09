import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-anatomy',
  templateUrl: './anatomy.component.html',
  styleUrls: ['./anatomy.component.scss']
})
export class AnatomyComponent implements OnInit, AfterViewInit {

  anatomyForm: FormGroup;

  constructor(
    private elementRef: ElementRef,
    private readonly renderer: Renderer2,
    private readonly fb: FormBuilder,
  ) {
    this.anatomyForm = this.fb.group({
      biceps: [''],
      chest: [''],
      abs: [''],
    });
   }



  @ViewChild('map', { static: false }) mapRef: ElementRef;


  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }

  onSubmitAnatomyForm() {
    // TODO
  }


}
