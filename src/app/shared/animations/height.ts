import { trigger, transition, style, animate } from "@angular/animations";

export const heightAnimation = trigger(
    'heightAnimation',
    [
        transition(
            ':enter',
            [
                style({ maxHeight: "0", opacity: 0 }),
                animate('.2s ease-in-out',
                    style({ maxHeight: "100vh", opacity: 1 }))
            ]
        ),
        // transition(
        //     ':leave',
        //     [
        //         style({ transform: 'translateY(0)', opacity: 1 }),
        //         animate('0s ease-in',
        //             style({ transform: 'translateY(15px)', opacity: 0 }))
        //     ]
        // )
    ]
)