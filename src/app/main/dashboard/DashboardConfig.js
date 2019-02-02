import {FuseLoadable} from '@fuse';
export const DashboardConfig = {

    settings:
    {
        layout:{
            config: {}
        }
    },
    routes  : [
        {
            path     : '/smartevents/dashboard',
            component: FuseLoadable({
                loader: () => import('./Dashboard')
            })
        }
    ]

};