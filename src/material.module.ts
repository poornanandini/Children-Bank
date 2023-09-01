import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
    exports: [
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        MatRadioModule,
        MatCardModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatSelectModule,
        MatSortModule,
        MatToolbarModule
        



    ]
})
export class MaterialModule{}