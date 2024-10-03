import { Component, OnInit } from '@angular/core';
import { StatService } from '../services/stat.service';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
 {
  items: MenuItem[] | undefined;

  amountCollected:number=0;
  noofevents: number = 0;
  volunteers: number = 0;
  helpedbypeople: number = 0;
  constructor(private stservice: StatService){
  }
  ngOnInit(): void {
    this.stservice.getStats().subscribe(dt=> {
      if(dt!== undefined)
      {
        this.amountCollected = dt.amountcollected
        this.noofevents = dt.noofevents
        this.volunteers = dt.volunteers
        this.helpedbypeople = dt.helpedbypeople
      }
    })

    this.items = [
      {
          label: 'Home',
          icon: 'pi pi-home',
          badge: '1'
      },
      {
          label: 'Contact',
          icon: 'pi pi-envelope',
          badge: '2'
      }
    ]
  }
}
