import { Component, OnInit } from "@angular/core";

import { DataService } from "./index";

@Component({
    selector: "data-list",
    templateUrl: "data-list.component.html",
    styleUrls : ["data-list.component.css"]
})
export class DataListComponent implements OnInit {
    public itemsSource: string[];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.itemsSource = this.dataService.getData();
    }
}