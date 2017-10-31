import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.scss']
})
export class SetupPageComponent implements OnInit {

  size; 
 
  /* подключаем UsersService
  создадим приватную переменную usersService типа UsersService и импортирую ее из соответствующего файла */
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // по умолчанию наша переменная size будет равняться this.usersService.size
    // чтобы мы знали какое сейчас стоит значение
    this.size = this.usersService.size;
  }
  
  /* здесь нужно изменить переменную size
  при событии onChange я буду делать this.usersService, вызывая метод setSize, для того чтобы изменить
  у нас уже есть измененная переменная size, поэтому в () пишем this.size и ставим +, чтобы привести к числу, если значение окажется строкой */
  onChange() {
    this.usersService.setSize(+this.size)
  }
}
