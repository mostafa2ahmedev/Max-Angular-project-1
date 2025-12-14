import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { AppModule } from "../app.module";
import { UserComponent } from "../user/user.component";


@NgModule({
    declarations:[CardComponent],
    exports:[CardComponent]
})
 export class SharedModule{}