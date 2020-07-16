import { Component, OnInit } from '@angular/core';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { DataStorageService} from '../data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private dataStorageService: DataStorageService , private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe((user)=>{
      this.isLoggedIn = !!user;
    });

    this.dataStorageService.fetchData();
  }

  onSaveData(){
    console.log("onSaveData() called");
    this.dataStorageService.storeData();
  }

  onFetchData(){
    console.log("onFetchData() called");
    this.dataStorageService.fetchData();
  }

  onLogout(){
    this.authService.logout();
  }

}
