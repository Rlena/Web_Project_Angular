import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// импортируем компонент UserComponent (5 шаг)
// т.о. мы импортировали компонент UserComponent в app.module, т.е. зарегистрировали этот компонент
import { UserComponent } from './user/user.component';

// HttpModule также импортируется из библиотеки @angular/http
import { HttpModule } from '@angular/http';
import { HoverDirective } from './hover.directive';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import { RouterModule } from '@angular/router';

// навигация создана, но нет роутов. Создаются они в app.module с пом. константы
/* каждый из элементов массива будет являться обьъектом
 у каждого из объектов должно быть два обязательных поля: path в строковом формате и второе поле component,
 куда мы передаем компонент, который должен подгрузиться при определенном роуте.
 По умолчанию, если у нас нет никакого роута, будет открываться домашняя страница,
 а при открытии страницы setup будет открываться другая страница.  */

/* теперь созданный роут нужно зарегистрировать в app.module в массиве imports подключаем RouterModule,
он импортируется из библиотеки '@angular/router'
У RouterModule мы вызываем метод forRoot, куда мы передаем routes */

//Angular нужно указать в какое место нужно рендерить те или иные страницы

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'setup', component: SetupPageComponent}
]

// декоратор, который описывает поведение класса AppModule
// он гооворит Angular, что это модуль
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HoverDirective,
    // регистрируем пайп и импортируем
    SearchPipe,
    HomePageComponent,
    SetupPageComponent,
    // передаем в массив declarations компонент UserComponent (4 шаг)
    UserComponent    
  ],
  // в массиве imports добавляем FormsModule, кот. импортируется из библиотеки '@angular/forms'
  // теперь когда мы зарегистрировали FormsModule, у нас будет включена поддержка, напр. ng моделей и теперь мы удобно можем их использовать в нашем коде
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
