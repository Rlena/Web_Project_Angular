import { Component } from '@angular/core';

// данный сервис нам нужно импортировать в данный файл (3 шаг создание сервиса)
import { UsersService } from './users.service';

// декоратор
@Component({
  selector: 'app-root',
// ссылка до шаблона  
  templateUrl: './app.component.html',
// массив ссылок до стилей  
  styleUrls: ['./app.component.scss'],
  
  // регистрируем созданный сервис (4 шаг создание сервиса и его регистрация)
  providers: [UsersService]
})

export class AppComponent {
}

// в фоновом режиме мы делаем асинхронный запрос к серверу, получаем элементы, парсим (обрабытваем) их как нам удобно, приводим к нужному формату и после этого Angular в цикле выводит нам все эти элементы
