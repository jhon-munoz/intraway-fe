import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../../service/service.service';
import {FizzBuzz} from '../../dtos/FizzBuzz';
import {ErrorDto} from '../../dtos/ErrorDto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public formGroup: FormGroup;
  public min: Number;
  public max: Number;
  public fizzBuzz: FizzBuzz = new FizzBuzz();
  public errorDto: ErrorDto = new ErrorDto();
  public flagError = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private router: Router,
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

    this.service.getFizzBuzz(this.min, this.max)
      .subscribe(data => {
        this.flagError = false;
        this.fizzBuzz = data;
      }, (error => {
        this.flagError = true;
        this.errorDto = error.error;
      }));
  }
}
