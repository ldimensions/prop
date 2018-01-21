import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyListingComponent } from './components/property-listing/property-listing.component';
import { PropertyViewComponent } from './components/property-view/property-view.component';
import { PropertyAddComponent } from './components/property-add/property-add.component';
import { PropertyEditComponent } from './components/property-edit/property-edit.component';
import { TestDirective } from './directives/test.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PropertyListingComponent, PropertyViewComponent, PropertyAddComponent, PropertyEditComponent, TestDirective]
})
export class PropertyModule { }
