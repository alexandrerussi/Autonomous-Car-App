import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesPage } from './places.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: PlacesPage,
        children: [
            {
                path: 'discover',
                children: [
                    {
                        path: '',
                        loadChildren: './discover/discover.module#DiscoverPageModule'
                    },
                    {
                        path: ':placeId',
                        loadChildren: './discover/detail/detail.module#DetailPageModule'
                    }
                ]
            },
            {
                path: 'offers',
                children: [
                    {
                        path: '',
                        loadChildren: './offers/offers.module#OffersPageModule'
                    },
                    {
                        path: 'new',
                        loadChildren: './offers/new/new.module#NewPageModule'
                    },
                    {
                        path: 'edit/:placeId',
                        loadChildren: './offers/edit/edit.module#EditPageModule'
                    },
                    {
                        path: ':placeId',
                        loadChildren: './offers/of-bookings/of-bookings.module#OfBookingsPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/places/tabs/discover',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full'
    },
  { path: 'detail', loadChildren: './discover/detail/detail.module#DetailPageModule' },
  { path: 'offers', loadChildren: './offers/offers.module#OffersPageModule' },
  { path: 'new', loadChildren: './offers/new/new.module#NewPageModule' },
  { path: 'edit', loadChildren: './offers/edit/edit.module#EditPageModule' },
  { path: 'of-bookings', loadChildren: './offers/of-bookings/of-bookings.module#OfBookingsPageModule' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlacesRoutingModule { }
