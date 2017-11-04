import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';  /* импортируем компонент UserComponent (4.2 шаг - создание компонента) */

import { HttpModule } from '@angular/http';   /* импортируем HttpModule из библиотеки @angular/http.
                                              (5.3 шаг - запрос на удаленный сервер)
                                              Теперь в app.component.ts в this.usersService.getUsers() нам нужно подписаться на запрос.
                                              (6 шаг - запрос на удаленный сервер) */

import { HoverDirective } from './hover.directive'; /* импортируем директиву HoverDirective. (4.3 шаг - создание директивы)
                                                    После этого в user.component.scss создадим новый класс и свойство.
                                                    И в директиве hover.directive.ts привязываем свойство к переменной.
                                                    (5 шаг - создание директивы) */

import { FormsModule } from '@angular/forms'; /* импортируем FormsModule из библиотеки '@angular/forms'
                                              Теперь, когда мы зарегистрировали данный FormsModule у нас будет включена поддержка ng-моделей
                                              и мы сможем удобно импользовать их в нашем коде. (2.4 шаг - создание пайпа)
                                              На данный момент форма работает, но функционала по поиску элементов нет.
                                              Нужно создать пайп. (3 шаг - создание пайпа) */

import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';

import { RouterModule } from '@angular/router';  /* импортируем RouterModule из библиотеки '@angular/router' (4.1 шаг - создание роутов) */

const routes = [  /* создаем роуты с помощью константы. (1 шаг - создание роутов) */
  {path: '', component: HomePageComponent},
  {path: 'setup', component: SetupPageComponent}  /* Каждый из элементов массива будет являться объектом.
                                                  У каждого из объектов должно быть два обязательных поля: path (в строковом формате) и component.
                                                  В component мы передаем компонент, который должен подгрузиться при определенном роуте.
                                                  По умолчанию, если у нас нет никакого роута, будет открываться домашняя страница,
                                                  а при открытии страницы setup будет открываться другая страница. (2 шаг - создание роутов)
                                                  Теперь созданный роут нужно зарегистрировать (здесь в app.module.ts):
                                                  в массиве imports подключаем RouterModule, он импортируется из библиотеки '@angular/router'.
                                                  (3 шаг - создание роутов) */
]

import { SearchPipe } from './search.pipe'; /* импортируем pipe из файла './search.pipe' (13 шаг - создание пайпа).
                                            Теперь мы можем применить данный пайп:
                                            в app.component.html мы делаем итерацию по массиву users.
                                            После users ставим | и пишем название пайпа search. (14 шаг - создание пайпа) */

@NgModule({  /* декоратор, который описывает поведение класса AppModule;
             он говорит Angular, что это модуль */

  declarations: [
    AppComponent,
    UserComponent,  /* регистрируем новый компонент UserComponent в модуле app.module.ts:
                    передаем в массив declarations компонент UserComponent и импортируем его из файла './user/user.component'
                    (4.1 шаг - создание компонента) */

    HoverDirective, /* регистрируем HoverDirective, (4.1 шаг - создание директивы)
                    и импортируем из соответствующего файла './hover.directive' (4.2 шаг - создание директивы) */

    SearchPipe,  /* регистрируем пайп (11 шаг - создание пайпа)
               и импортируем из соответствующего файла (12 шаг - создание пайпа) */

    HomePageComponent,
    SetupPageComponent        
  ],

  imports: [
    BrowserModule,
    HttpModule, /* Прописываем модуль HttpModule. (5.1 шаг - запрос на удаленный сервер)
                и импортируем его из библиотеки @angular/http (5.2 шаг - запрос на удаленный сервер) */

    FormsModule, /* Добавляем FormsModule и импортируем его из библиотеки '@angular/forms' (2.3 шаг - создание пайпа) */

    RouterModule.forRoot(routes)  /* подключаем RouterModule и импортируем его из библиотеки '@angular/router' (4.0 шаг - создание роутов)
                                  У RouterModule мы вызываем метод forRoot, куда передаем routes. (4.2 шаг - создание роутов)
                                  Теперь Angular нужно указать в какое место нужно рендерить те или иные страницы. 
                                  В app.component.html у нас есть див-контейнер, в кот. мы будем складывать наши страницы.
                                  (5 шаг - создание роутов) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}