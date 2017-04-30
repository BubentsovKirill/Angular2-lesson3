import { DataListComponent } from './simpleService/index';
import {CounterHostComponent} from './serviceHierarchy/index';
import {
    ProviderLiteralComponent,
    AliesedComponent,
    ValueProviderComponent,
    FactoryProviderComponent,
    OpaqueTokenComponent,
    OptionalComponent
} from './providers/index';

export const routes = [
    {path: 'dataList', component: DataListComponent},
    {path: 'service', component:CounterHostComponent},
    {path: 'providersLiteral', component:ProviderLiteralComponent},
    {path: 'aliased', component:AliesedComponent},
    {path: 'value', component:ValueProviderComponent},
    {path: 'factory', component:FactoryProviderComponent},
    {path: 'opaque', component:OpaqueTokenComponent},
    {path: 'optional', component:OptionalComponent},

    {path: '', redirectTo: 'dataList', pathMatch: 'full'}
]