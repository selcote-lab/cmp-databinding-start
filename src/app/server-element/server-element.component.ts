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
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
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

  @ViewChild("heading") header: ElementRef;
  @ContentChild("contentParagraph") paragraph: ElementRef;
  ngOnInit() {
    console.log("ngONit called");
    console.log("text content" + this.header.nativeElement.textContent);
    console.log(
      "contentParagraph content" + this.paragraph.nativeElement.textContent
    );
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
    console.log("text content" + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
    console.log(
      "contentParagraph content" + this.paragraph.nativeElement.textContent
    );
  }
  ngfterContentChecked() {
    console.log("ngfterContentChecked");
  }
}
