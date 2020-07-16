import { Component } from '@angular/core';
import {LanguageWithState } from './languagewithstate.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  language = '';
  state = '';
  index = 0;
  searchText = '';
  listOfLanguages : LanguageWithState[] = []; 


  addLanguage(){
    const ob = new LanguageWithState(this.state,this.language);
    //adding objects
    this.listOfLanguages.push(ob);

    //sorting
    this.listOfLanguages = this.listOfLanguages.sort((x:LanguageWithState,y:LanguageWithState)=>{
      return x.language.localeCompare(y.language);
    })

    //clear data
    this.language='';
    this.state='';
  }

  deleteLanguageFirst(){
    this.listOfLanguages.splice(this.index,1); 
  }

  getFilteredLanguages(){
  return this.listOfLanguages.filter(lang=>lang.language.startsWith(this.searchText));
}



}
