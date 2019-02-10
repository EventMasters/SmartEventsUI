import React from 'react';
import {FuseLoadable} from '@fuse';
import {Redirect} from 'react-router-dom';

export const EventConfig = {
    settings: {
        layout: {}
    },
    routes: [
        {
            path     : '/smartevents/event/events',
            component: FuseLoadable({
                loader: () => import('./events/Products')
            })
        },
        {
            path :'/smartevents/event/newevent',
            component:  FuseLoadable({
                loader: () => import('./newevent/Product')
            })
        }

    ]
};