import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})
export class EmisorComponent implements OnInit {

  //Este va a emitir respuesta
  @Output() emisorHijo = new EventEmitter();  

  ngOnInit() {
  }
  
  emitir( valorIn:string ){
    this.emisorHijo.emit(valorIn);
  }

}