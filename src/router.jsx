import {createBrowserRouter } from 'react-router-dom'
import Index from './pages/mainpage';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Index/>,
    }
    // {
    //     path: '/privacy',
    //     element: <></>,
    // },
    // {
    //     path: '/certificate',
    //     element: <></>,
    // },
    // {
    //     path: '*',
    //     element: <></>,
    // }
]);

export default router;