import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { ProductDetailComponent } from "../products/product-detail.component";
import { ProductDetailGuard } from "../products/product-detail.guard";
import { ProductListComponent } from "../products/product-list.component";
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "products", component: ProductListComponent },
            {
              path: "products/:id",
              canActivate: [ProductDetailGuard],
              component: ProductDetailComponent
            }
          ]),
        SharedModule
    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ConvertToSpacesPipe
    ]
})
export class ProductModule { }