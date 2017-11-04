import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'; /* импортируем UsersService из '../users.service' (12 шаг - функционал страницы setup) */

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.scss']
})
export class SetupPageComponent implements OnInit {

  size; /* создаем переменную size (3.1 шаг - функционал страницы setup)
        Теперь в setup-page.component.html добавим кнопку. (4.0 шаг - функционал страницы setup) */
  
  constructor(private usersService: UsersService) { } /* подключаем UsersService:
                                                      создадим приватную переменную usersService типа UsersService
                                                      и импортируем ее из соответствующего файла '../users.service'.
                                                      (11 шаг - функционал страницы setup) */

  ngOnInit() {  /* Поставим значение по умолчанию в форме фильтрации в setup, чтобы мы знали какое сейчас стоит значение.
                У нас есть метод ngOnInit() и по умолчанию наша переменная size будет равняться this.usersService.size.
                Теперь на странице setup отмечено значение 8. (14 шаг - функционал страницы setup) */

  this.size = this.usersService.size;
  }

  onChange() { /* создаем call back onChange() (5.1 шаг - функционал страницы setup)
                  Теперь в users.service.ts (в export class UsersService) нужно создать переменную size. (6 шаг - функционал страницы setup) */

    this.usersService.setSize(+this.size)  /* здесь нужно изменить переменную size.
                                           При событии onChange() мы будем делать this.usersService, вызывая метод setSize, для того чтобы изменить.
                                           У нас уже есть измененная переменная size,
                                           поэтому в () пишем this.size и ставим +, чтобы привести к числу, если значение окажется строкой.
                                           (13 шаг - функционал страницы setup) */
  }
}