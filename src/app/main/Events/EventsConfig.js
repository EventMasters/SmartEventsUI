import {FuseLoadable} from '@fuse';

export const EventsConfig = {
    settings: {
        layout: {}
    },
    routes: [
        {
            path     : '/smartevents/event/events',
            component: FuseLoadable({
                loader: () => import('./EventsMainPage')
            })
        },
        {
            path :'/smartevents/event/newevent',
            component:  FuseLoadable({
                loader: () => import('./NewEvent')
            })
        }

    ]
};