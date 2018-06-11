# NgTable

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

# Dependencias:

- font-awesome: Para los iconos de sorting en  el encabezado de las tablas
- ng2-bootstrap: Para el componente de paginacion
- ng2-table: Para las opciones y configuraciones de la tabla

# Otros:
- json-placeholder: API para obtener datos

# Archivos:
- servicio.service.ts: Para traer los datos del API

- app.component.ts: Componente principal y configuración de la tabla
- app.module.ts: HTML del componente, se presenta la tabla, paginación y la estrucutra de los datos obtenidos del API
- app.module.ts: Modulo principal de la aplicación

## *app.module

Imports:

```

// Servicio de datos
import { ServicioService } from './servicio.service';
// modulo para peticiones http
import { HttpClientModule } from '@angular/common/http'
// Modulo ng2-table
import { Ng2TableModule } from 'ng2-table/ng2-table';
// FormsModule para el uso de la directiva ngModel
import { FormsModule } from '@angular/forms'
//Módulo de ng2-bootstrap para el componente de paginación
import { PaginationModule } from "ng2-bootstrap/pagination";


```


