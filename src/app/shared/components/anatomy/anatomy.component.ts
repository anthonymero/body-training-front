import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-anatomy',
  templateUrl: './anatomy.component.html',
  styleUrls: ['./anatomy.component.scss']
})
export class AnatomyComponent implements OnInit, AfterViewInit {

  @ViewChildren('input') inputs: QueryList<ElementRef>;

  anatomyForm: FormGroup;
  // TODO define a model
  musclesToSet: any[] = [
    {
      name: 'biceps',
      size: '10',
      isSelected: false,
    },
    {
      name: 'chest',
      size: '80',
      isSelected: false,

    },
    {
      name: 'abs',
      size: '50',
      isSelected: false,

    },
  ];


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


  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }


  onSubmitAnatomyForm(): void {
    // TODO
  }

  onActiveMuscle(id: number): void {
    this.resetSelectedMuscles();
    this.inputs.toArray()[id].nativeElement.focus();
    this.musclesToSet[id].isSelected = true;

  }

  onActiveInput(id: number): void {
    this.resetSelectedMuscles();
    this.musclesToSet[id].isSelected = true;
  }

  private resetSelectedMuscles(): void {
    this.musclesToSet.forEach(muscle => {
      muscle.isSelected = false;
    });
  }


}
