import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public buffer: string = "0";
  public operator: string = "";
  private operand: number = 0;


  public pressDigit(digit: number) {
    if (this.buffer == "0") this.buffer = digit.toString();
    else this.buffer += digit.toString();
  }

  public pressDecimal() {
    if (this.buffer.indexOf(".") == -1) this.buffer += ".";
  }

  public pressOperator(op: string) {
    this.operand = parseFloat(this.buffer);
    this.operator = op;
    this.buffer = "0";
  }

  public pressEquals() {
    switch (this.operator) {
      case "+":
        this.buffer = (this.operand + parseFloat(this.buffer)).toString();
        this.operator = "";
        break;
      case "-":
        this.buffer = (this.operand - parseFloat(this.buffer)).toString();
        this.operator = "";
        break;
      case "×":
        this.buffer = (this.operand * parseFloat(this.buffer)).toString();
        this.operator = "";
        break;
      case "÷":
        this.buffer = (this.operand / parseFloat(this.buffer)).toString();
        this.operator = "";
        break;
    }
  }

  public pressClear() {
    this.buffer = "0";
  }

  public pressBackspace() {
    if (this.buffer.length <= 1) this.buffer = "0";
    else this.buffer = this.buffer.slice(0, -1);
  }
}
