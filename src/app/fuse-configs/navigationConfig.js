const navigationConfig = [
    {
        
                'id'   : 'dashboards',
                'title': 'Dashboard',
                'type' : 'item',
                'icon' : 'dashboard',
                'url'  : '/smartevents/dashboard'
           
    }

  ,

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
            {'id'   : 'event',
            'title': 'My Event',
            'type' : 'item',
            
            'url'  : '/smartevents/event/newevent'
            }
        ]
    },
    {
        'id'   : 'friend',
        'title': 'Friends',
        'type' : 'item',
        'icon' : 'account_box',
        'url'  : '/smartevents/friends'
        
    }
    ,
    {
        'id'   : 'calendar',
        'title': 'Calendar',
        'type' : 'item',
        'icon' : 'today',
        'url'  : '/smartevents/calendar'
    }
];

export default navigationConfig;
