import { Component, OnInit } from '@angular/core';
import { EventResponse, EmergencyEvent, Acknowledgement } from '../interfaces';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-datails',
  templateUrl: './datails.page.html',
  styleUrls: ['./datails.page.scss'],
})
export class DatailsPage implements OnInit {
  eventId: number;
  eventResponse: EventResponse;
  event: EmergencyEvent;
  acknowledgments: Acknowledgement[] = [];
  newNote = '';

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService
  ) { }

  async ngOnInit() {
    this.eventId = +this.route.snapshot.params['eventId'];
    this.eventResponse = await this.eventService.getById(this.eventId).toPromise();
    this.event = this.eventResponse.event;
    //this.acknowledgments = await this.eventService.getAcknowledgements(this.eventResponse).toPromise();
  }

}
