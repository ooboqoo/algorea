import { Component } from "@angular/core";

enum FieldType {
  NonRequested = "non-requested",
  Recommend = "recommend",
  Mandatory = "mandatory"
}

interface Column {
  name: string;
  type: FieldType;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  source: Column[];
  target: Column[];

  ngOnInit() {
    this.source = [
      { name: "Last name", type: FieldType.Recommend },
      { name: "Grade", type: FieldType.Recommend },
      { name: "Sub-group", type: FieldType.Recommend }
    ];

    this.target = [{ name: "First name", type: FieldType.Mandatory }];
  }
}
