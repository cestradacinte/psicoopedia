import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./routes.protected";
import { map } from "lodash";
import routes from "./routes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {map(routes, (route, index) => {
          const Component = route.component;
          const Layout = route.layout;
          const RouteElement = route.isPrivate ? (
            <ProtectedRoute component={Component} layout={Layout} />
          ) : (
            <Layout>
              <Component />
            </Layout>
          );

          return <Route key={index} path={route.path} element={RouteElement} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};
