import { Component, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, OnChanges {

  @Output()
  closeSideNav: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelectMenuItem(event): void {
    console.log(event);

    this.closeSideNav.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.

  }

}
