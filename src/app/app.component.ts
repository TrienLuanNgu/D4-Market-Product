import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly metrics = [
    { value: '337mm', label: 'usable rail travel' },
    { value: '50ms', label: 'BLE zoom update window' },
    { value: '1 tap', label: 'ARKit subject calibration' },
    { value: '3 buttons', label: 'forward, reverse, pause workflow' },
  ];

  readonly workflow = [
    {
      number: '01',
      title: 'Frame the subject',
      copy: 'The operator mounts the iPhone and taps the subject in the custom app preview.',
    },
    {
      number: '02',
      title: 'Measure distance',
      copy: 'ARKit raycast calculates subject distance so the dolly-zoom equation can be calibrated automatically.',
    },
    {
      number: '03',
      title: 'Run the move',
      copy: 'The ESP32 drives the rail while sending BLE zoom-factor updates to keep the subject locked in frame.',
    },
  ];

  readonly evidence = [
    {
      stage: 'Retired attempt',
      title: 'Servo drive was too unstable.',
      copy: 'The first SG90 pulley coupling introduced wobble and inconsistent belt tension, so it was replaced.',
      image: '/assets/servo-attempt.jpg',
      alt: 'Initial servo-driven carriage attempt with a small pulley attached.',
    },
    {
      stage: 'Retired attempt',
      title: 'Physical stylus zoom was too fragile.',
      copy: 'Dragging the phone zoom slider required exact alignment, so the design moved to software-controlled zoom.',
      image: '/assets/stylus-zoom-attempt.jpg',
      alt: 'Initial mechanical zoom mechanism with a servo and stylus near a phone screen.',
    },
    {
      stage: 'Final drive',
      title: 'Stepper motion made the shot repeatable.',
      copy: 'A 28BYJ-48 stepper and ULN2003 driver provide precise carriage positioning over the rail.',
      image: '/assets/stepper-drive.jpg',
      alt: 'Replacement 28BYJ-48 stepper motor with ULN2003 driver components.',
    },
    {
      stage: 'Integration',
      title: 'Firmware and app were tuned together.',
      copy: 'ESP32 pulse timing, BLE notifications, and zoom math were calibrated as a connected system.',
      image: '/assets/calibration-breadboard.jpg',
      alt: 'ESP32 development board and motor driver setup during calibration.',
    },
  ];

  readonly technical = [
    {
      title: 'ESP32 firmware',
      copy: 'Controls the stepper motor, handles physical buttons, and advertises the BLE service used by the phone.',
    },
    {
      title: 'iOS companion app',
      copy: 'Uses SwiftUI, AVFoundation zoom control, and ARKit raycast measurement to automate the shot setup.',
    },
    {
      title: 'Stepper rail motion',
      copy: 'Open-loop step counting gives millimetre-level repeatability across the usable travel distance.',
    },
    {
      title: 'Cinematic synchronisation',
      copy: 'The camera moves along the rail while the app adjusts zoom in the opposite direction to preserve subject size.',
    },
  ];

  readonly materials = [
    'A2 poster with hero still, workflow, and QR link to this site.',
    'Small table card naming the three-step demo: Tap, Slide, Zoom.',
    'One-page handout summarising the problem, novelty, and build evidence.',
    'Live artefact display with the final slider, phone mount, ESP32 board, and button controls visible.',
    'Short demo loop showing the background perspective shift from the dolly-zoom shot.',
  ];

  readonly expoMoments = [
    {
      time: '0-15s',
      title: 'Hook',
      copy: 'Show the finished dolly-zoom clip first so visitors immediately see the cinematic payoff.',
    },
    {
      time: '15-45s',
      title: 'Mechanism',
      copy: 'Point to the rail, ESP32, and phone app while explaining how motion and zoom stay synchronised.',
    },
    {
      time: '45-90s',
      title: 'Evidence',
      copy: 'Use the retired servo and stylus attempts to justify why the final stepper and BLE solution is stronger.',
    },
    {
      time: '90s+',
      title: 'Takeaway',
      copy: 'Give visitors the QR handout so they can revisit the site, build story, and technical summary.',
    },
  ];
}
