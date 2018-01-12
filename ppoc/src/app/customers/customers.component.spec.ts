import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';
import { AccordionModule,
  BreadcrumbModule,
  ButtonModule,
  CaptchaModule,
  CheckboxModule,
  DataTableModule,
  DialogModule,
  DropdownModule,
  FieldsetModule,
  InputMaskModule,
  InputTextModule,
  MessagesModule,
  MultiSelectModule,
  PanelModule,
  RadioButtonModule,
  TabViewModule } from 'primeng/primeng';
import { AppComponent } from 'app/app.component';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent,
        CustomersComponent ],
      imports: [ AccordionModule,
        BreadcrumbModule,
        ButtonModule,
        CaptchaModule,
        CheckboxModule,
        DataTableModule,
        DialogModule,
        DropdownModule,
        FieldsetModule,
        InputMaskModule,
        InputTextModule,
        MessagesModule,
        MultiSelectModule,
        PanelModule,
        RadioButtonModule,
        TabViewModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
