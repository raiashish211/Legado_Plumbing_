import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
    testimonials = [
      {
        text: 'He was a great plumber that helped critical role on solving the issue I shared with the neighbor. He was honest and generous. Nothing was pushed I felt very comfortable working with him!  Thank you Chris!',
        // logo: 'path/to/logo1.png',
        name: 'Jen Chung',
        customerText: 'Customer'
      },
      {
        text: 'I recommend anyone looking for a quick response and great service for plumbing to contact Chris Alcoser.',
        // logo: 'path/to/logo2.png',
        name: 'Lamar Washington',
        customerText: 'Customer'
      }
      // Add more testimonials as needed
    ];
}
