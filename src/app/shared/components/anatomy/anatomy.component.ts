import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-anatomy',
  templateUrl: './anatomy.component.html',
  styleUrls: ['./anatomy.component.scss']
})
export class AnatomyComponent implements OnInit, AfterViewInit {

  constructor(
    private elementRef: ElementRef,
    private readonly renderer: Renderer2,
  ) { }

  map;
  paths: [];
  links: [];

  @ViewChild('map', { static: false }) mapRef: ElementRef;


  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.map = this.mapRef.nativeElement;
    this.paths = this.map.querySelectorAll('.map__image a');

  }


}
