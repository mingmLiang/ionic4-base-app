import { supportingData } from './supporting-data.constants';

export class ConstantService {
    constructor() {
    }

    getSupprotingData(type) {
        return supportingData[type];
    }

}
