    const navigationConfig = [
        {
        'id'   : 'event',
        'title': 'Event',
        'type' : 'collapse',
        'icon' : 'event_seat',
        'url' :'/smartevents/event',
        'children':
        [
            {'id'   : 'event',
            'title': 'Events',
            'type' : 'item',
            'url'  : '/smartevents/event/events'
            },
            
        {
        'id'   : 'event',
        'title': 'New Event',
        'type' : 'item',
        'url'  : '/smartevents/event/newevent'
        }
        ]
    }
    ];

    export default navigationConfig;
