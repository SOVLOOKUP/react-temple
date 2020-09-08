import Page from "../pages/Details/page"
import Page1 from "../pages/Details/page1"
import Page2 from "../pages/Details/page2"
// import Page3 from "./pages/page3"
import Home from "../pages/Home/Home"
import ReduxPage from "../pages/Home/ReduxPage"

const routes = [
    {
        path: "/page",
        component: Page
    },
    {
        path: "/home/:id?",
        component: Home
    },
    {
        path: "/redux",
        component: ReduxPage
    },
    {
        path: "/page1",
        component: Page1,
        children: [
            {
                path: "/page1/page2",
                component: Page2,
                children: [
                    {
                        path: "/page1/page2/page3",
                        component: () => import(/*webpackChunkName:"page3"*/"../pages/Details/page3")
                    }
                ]
            }
        ]
    },
    {
        path: "/",
        redirect:"/home"
    }
];

export default { routes }