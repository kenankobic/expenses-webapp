import { animate, style, transition, trigger } from "@angular/animations";

export const carouselAnimation = trigger('carouselAnimation', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 }))
    ]),
    transition('* => void', [
        animate('1000ms', style({ opacity: 0 }))
    ])
])