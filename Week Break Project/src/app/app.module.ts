import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { HeroComponent }  from './components/hero.component';
import { QuestService} from './shared/quest.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, HeroComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
