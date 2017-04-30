import { Component, OpaqueToken, Inject} from '@angular/core';

let APP_CONFIG = new OpaqueToken('app_config');
let config = {
    app1 : 'value 1',
    app2 : 'value 2'
}

@Component({
  selector: 'fa-opaque-token',
  templateUrl: './opaque-token.component.html',
  styleUrls: ['./opaque-token.component.css'],
  providers: [{provide: APP_CONFIG, useValue: config}]
})
export class OpaqueTokenComponent {
    config: any;
    constructor(@Inject(APP_CONFIG) config:any){
        this.config = config;
    }
    logConfigInfo(){
        console.log(this.config.app1);
        console.log(this.config.app2);
    }
}
