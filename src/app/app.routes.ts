import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Converter } from './pages/converter/converter';
import { Environment } from './pages/environment/environment';

export const routes: Routes = [
    {path: "home", component: Home},
    {path: "about", component: About},
    {path: "converter", component: Converter},
    {path: "environment", component: Environment},
    {path: "", redirectTo: "home", pathMatch: "full"}
];
