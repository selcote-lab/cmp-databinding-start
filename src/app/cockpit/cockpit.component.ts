import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  serverElements = [];
  // newServerName = "";
  // newServerContent = "";
  @ViewChild("serverContentInput") serverContentContent: ElementRef;
  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {
    // console.log(serverNameInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentContent.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentContent.nativeElement.value
    });
  }
}
