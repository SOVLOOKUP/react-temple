import Page from "./pages/page"
import Page1 from "./pages/page1"
import Page2 from "./pages/page2"
import Page3 from "./pages/page3"

const routes = [
    {
        path: "/page",
        component: Page
    },
    {
        path: "/page1/:id?",
        component: Page1,
        children: [
            {
                path: "/page1/page2",
                component: Page2,
                children: [
                    {
                        path: "/page1/page2/page3",
                        component: Page3
                    }
                ]
            }
        ]
    },
    {
        path: "/",
        redirect:"/page"
    }
];

export default { routes }