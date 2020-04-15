import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventResponse } from "../interfaces";
import { Subscription } from "rxjs";
import { EventsService } from '../events.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"],
})
export class FolderPage implements OnInit, OnDestroy {
  public folder: string;
  events: EventResponse[] = [];
  sub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventsService,
    private nav: NavController
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get("id");
    this.sub = this.eventService.getAll().subscribe((e) => this.events.push(e));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getEvents(): EventResponse[] {
    return this.events.sort( (a,b) => a.event.created > b.event.created ? -1 : 1 );
  }

  details(response: EventResponse) {
    this.nav.navigateForward(`/datails/${response.event.id}`);
  }
}
