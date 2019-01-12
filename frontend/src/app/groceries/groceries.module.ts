import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GroceryButtonComponent } from './components/grocery-button/grocery-button.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { GroceryRoutingModule } from './groveries-routing.module';
import { IconPipe } from './pipes/icon.pipe';
import { GroceryViewComponent } from './view/grocery-view/grocery-view.component';

@NgModule({
  declarations: [GroceryViewComponent, GroceryButtonComponent, SubmitButtonComponent, IconPipe],
  imports: [CommonModule, GroceryRoutingModule],
  exports: [GroceryViewComponent],
})
export class GroceriesModule {}
