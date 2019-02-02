import {FuseLoadable} from '@fuse';

export const FriendsConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/smartevents/friends',
            component: FuseLoadable({
                loader: () => import('./Friends')
            })
        }
    ]
};