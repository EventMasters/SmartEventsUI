import {FuseLoadable} from '@fuse';

export const CalendarAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/smartevents/calendar',
            component: FuseLoadable({
                loader: () => import('./CalendarApp')
            })
        }
    ]
};
