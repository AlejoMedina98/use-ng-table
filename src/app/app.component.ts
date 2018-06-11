import { Component, OnInit } from '@angular/core';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public data: any[] = new Array();
  public rows: any[] = new Array();
  constructor(private _http: ServicioService) {

  }

  ngOnInit() {
    this._http.getUsers().subscribe((data: any[]) => {
      this.data = data;
      this.onChangeTable(this.config);
    });
  }

  public columns: Array<any> = [
    {
      title: 'ID',
      name: 'id'
    },
    {
      title: 'Nombre',
      name: 'name',
      filtering: { filterString: '', placeholder: 'Filtrar por nombre' }
    },
    {
      title: 'Usuario',
      name: 'username',
      filtering: { filterString: '', placeholder: 'Filtrar por usuario' }
    },
    {
      title: 'Correo',
      name: 'email',
      filtering: { filterString: '', placeholder: 'Filtrar por correo' }
    },
    {
      title: 'Telefono',
      name: 'phone',
      filtering: { filterString: '', placeholder: 'Filtrar por teléfono' }

    },
    {
      title: 'Website',
      name: 'website',
      filtering: { filterString: '', placeholder: 'Filtrar por sitio' }

    },

  ];

  public page: number = 1;
  public itemsPerPage: number = 3;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered']
  };



  public onCellClick(data: any): any {
    /**
     * Cuando una celda es clic -> Imprime la celda en el formato: 
     * {
     * column: columna_clic,
     * row: datos_de_la_fila
     * }
     */
    console.log(data);
  }



  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }


  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }


  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }


  public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

}