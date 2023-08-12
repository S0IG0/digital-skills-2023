import {JSX} from "react";
import App from "../../App.tsx";
import Upload from "../pages/Upload.tsx";
import StatisticsTableView from "../pages/Statistics.tsx";

export interface IRoute {
    path: string,
    name: string
    component: () => JSX.Element;
}

export enum RoutesNames {
    UPLOAD = 'upload',
    HOME = 'home',
    STATISTICS = 'statistics',

}

export const routers: Map<string, IRoute> = new Map<string, IRoute>()
    .set(RoutesNames.HOME, {path: '/', name: RoutesNames.HOME, component: App})
    .set(RoutesNames.UPLOAD, {path: '/upload', name: RoutesNames.UPLOAD, component: Upload})
    .set(RoutesNames.STATISTICS, {path: '/statistics', name: RoutesNames.STATISTICS, component: StatisticsTableView})
