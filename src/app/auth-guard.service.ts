import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
	constructor(private authService:AuthService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		Observable<boolean> | Promise<boolean> {
		return this.authService.isAuthenticated()
			.then(
				(authed: boolean) => {
					if(authed === true) {
						return true;
					} else {
						this.router.navigate(['/login']);
					}
				}
			);
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		Observable<boolean> | Promise<boolean> {
		return this.canActivate(route, state);
	}
}
