import { Pipe, PipeTransform } from '@angular/core';
declare const require: any;
const _ = require('lodash');
@Pipe({
    name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {
    transform(value: any, items: any[]): any {
        value = value + '';
        if (items && items.length >= 0) {
            if (!_.isEmpty(value)) {
                const valueArr = value.split(',');
                const resultArr = new Array();
                for (let n = 0; n < valueArr.length; n++) {
                    for (let i = 0; i < items.length; i++) {
                        if (valueArr[n] === items[i].code + '') {
                            resultArr.push(items[i].label);
                            break;
                        }
                    }
                }
                return resultArr.join(',');
            } else {
                return '';
            }
        } else {
            return value;
        }
    }
}
