import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public formGroup: FormGroup;
  public min: Number;
  public max: Number;

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      min: ['', Validators.required],
      max: ['', Validators.required]
    });
  }

  get() {
    this.min = this.formGroup.controls.min.value;
    this.max = this.formGroup.controls.max.value;
    console.log(this.min, this.max);
    this.service.getFizzBuzz(this.min, this.max)
      .subscribe(data => {
        alert('Saved successfully');
      });
  }
}
