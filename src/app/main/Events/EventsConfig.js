import EventsMainPage from './EventsMainPage';

export const EventsConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/Event',
            component: EventsMainPage
        }
    ]
};