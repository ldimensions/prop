import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PropertyListingComponent } from './components/property-listing/property-listing.component';
import { PropertyViewComponent } from './components/property-view/property-view.component';
import { PropertyAddComponent } from './components/property-add/property-add.component';
import { PropertyEditComponent } from './components/property-edit/property-edit.component';
import { TestDirective } from './directives/test.directive';
import { propertyRouter } from './property.router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      propertyRouter
    )
  ],
  declarations: [PropertyListingComponent, PropertyViewComponent, PropertyAddComponent, PropertyEditComponent, TestDirective]
})
export class PropertyModule { }
