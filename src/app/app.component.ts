import { Component } from '@angular/core';

import { UsersService } from './users.service';  /* импортируем сервис UsersService в данный файл
                                                   из './users.service'. (2.3 шаг - создание сервиса)
                                                   После чего нужно зарегистрировать сервис. (2.4 шаг - создание сервиса) */ 

@Component({  /* декоратор */
  selector: 'app-root',  /* selector */
  templateUrl: './app.component.html',  /* ссылка до шаблона */
  styleUrls: ['./app.component.scss'],  /* массив ссылок до стилей */

providers: [UsersService]   /* регистрируем созданный сервис UsersService (3 шаг - создание сервиса) */

})

export class AppComponent {
  
}

/* Вкратце, что происходит: в фоновом режиме мы делаем асинхронный запрос к серверу, получаем элементы, парсим (обрабытваем) их как нам удобно,
приводим к нужному формату и после этого Angular самостоятельно в цикле выводит нам все эти элементы. */
