import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent]
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
@NgModule({ 
  declarations: [ 
      AppComponent 
  ], 
  imports: [ 
      BrowserModule, 
      HttpClientModule, 
      FormsModule 
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
