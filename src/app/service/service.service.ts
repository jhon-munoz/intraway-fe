import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FizzBuzz} from '../dtos/FizzBuzz';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient
  ) {
  }

  url = 'http://localhost:8090/intraway/api/fizzbuzz';

  getFizzBuzz(min: Number, max: Number) {
    return this.http.get<FizzBuzz>(this.url + '/' + min + '/' + max);
  }
}
