import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { AddcardetailComponent } from './addcardetail.component';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
// import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AddcarserviceService } from '../shared/addcarservice.service';




// describe('AddcardetailComponent (minimal)', () => {
//   it('should create', () => {
//     TestBed.configureTestingModule({
//       imports: [BrowserModule,
//         NgbModule.forRoot(), FormsModule, HttpClient ],
//       declarations: [ AddcardetailComponent ],
//       providers:[AddcarserviceService]
//     });
//     const fixture = TestBed.createComponent(AddcardetailComponent);
//     const component = fixture.componentInstance;
//     expect(component).toBeDefined();
//   });
// });



describe('AddcardetailComponent', () => {
  let component: AddcardetailComponent;
  let fixture: ComponentFixture<AddcardetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          imports: [BrowserModule, HttpClientModule, HttpClientTestingModule,
       NgbModule.forRoot(), FormsModule, ],
      declarations: [ AddcardetailComponent ],
      providers:[AddcarserviceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcardetailComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should be created', () => {
    const service: AddcarserviceService = TestBed.get(AddcarserviceService);
    expect(service).toBeTruthy();
   });
});
