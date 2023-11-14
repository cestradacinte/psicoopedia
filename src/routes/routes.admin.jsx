import { AdminLayout } from "../layouts";
import { LoginAdmin, DashboardAdmin } from "../pages";

const routesAdmin = [
    {
    path: '/admin',
    layout: AdminLayout,
    component: LoginAdmin,
    isPrivate: false
    },{
        path: '/admin/dashboard',
        layout: AdminLayout,
        component: DashboardAdmin,
        isPrivate: true
    }
]

export default routesAdmin;