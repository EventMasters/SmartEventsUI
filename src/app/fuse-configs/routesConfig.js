import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';
import {ExampleConfig} from 'app/main/example/ExampleConfig';
import {appsConfigs} from 'app/main/appConfigs';
import {ComponentsConfig} from 'app/main/components/ComponentsConfig';


const routeConfigs = [
    ...appsConfigs,
    
    ComponentsConfig,
    ExampleConfig,
];

 const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/smartevents"/>
    }
];

 export default routes;
