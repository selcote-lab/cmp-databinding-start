import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input("srvElement") element: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name: string;
  constructor() {
    console.log("constructor called");
  }

  ngOnInit() {
    console.log("ngONit called");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
  }
  ngDoCheck() {
    console.log("doCheck");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit");
  // }
  // ngfterContentChecked() {
  //   console.log("ngfterContentChecked");
  // }
}
