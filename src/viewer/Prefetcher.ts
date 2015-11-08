/// <reference path="../../typings/when/when.d.ts" />

import * as when from "when";

import APIv2 from "../API";

/* Interfaces */
import IAPINavIm from "../interfaces/IAPINavIm";

export class Prefetcher {
    private apiV2: APIv2;

    constructor (clientId: string) {
        this.apiV2 = new APIv2(clientId);
    }

    public loadFromKey(key: string): when.Promise<IAPINavIm> {
        return this.apiV2.nav.im(key);
    }
}

export default Prefetcher