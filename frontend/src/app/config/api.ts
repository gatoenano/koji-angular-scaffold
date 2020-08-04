// tslint:disable:object-literal-key-quotes
// core
import { HttpHeaders } from '@angular/common/http';
// environment
import { environment } from '../../environments/environment';
// config
import { APP } from './app';
// interfaces
import { IKojiConfigRoutes, IKojiConfigGeneric } from '../interfaces';
// packages
import * as koji from 'koji-tools';


// API config
// -- api endpoints
const APIEndpoints: IKojiConfigGeneric = {};
koji.config.routes.map((r: IKojiConfigRoutes) => {
  APIEndpoints[r.name] = environment.app_api_service_url + r.route;
}, []);

// -- api headers
const APIHeaders = {
  get() {
    return new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': APP.base_url,
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,HEAD,OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Access-Control-Allow-Headers, Content-Type, Accept',
      'Content-Type': 'application/json; charset=utf-8'
    });
  },
  post() {
    return new HttpHeaders({
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Access-Control-Allow-Origin': APP.base_url,
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,HEAD,OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Access-Control-Allow-Headers, Content-Type, Accept',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  },
};


// -- api config
export const API = {
  baseUrl: environment.app_api_service_url,
  headers: APIHeaders,
  endpoints: APIEndpoints,
};
