import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    standalone: true
})
export class FilterPipe implements PipeTransform {

    transform(items: any[], searchText: string, field: string): any[] {
        if (!items) return [];
        if (!searchText) return items;

        searchText = searchText.toLowerCase();

        return items.filter(it => {
            const val = it[field];
            if (typeof val === 'string') {
                return val.toLowerCase().includes(searchText);
            }
            return val == searchText;
        });
    }
}
