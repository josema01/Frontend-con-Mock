# Frontend Mock Angular

Aplicación moderna en **Angular 21** que demuestra la obtención y visualización de datos utilizando **JSON mockeado**. Este proyecto muestra buenas prácticas para construir aplicaciones web responsivas utilizando las últimas características de Angular, como **componentes standalone** y **patrones reactivos**.

## 🎯 Características

- **Arquitectura Angular moderna**: Construido con Angular 21 usando componentes standalone  
- **Flujo de datos reactivo**: Uso de Observables de RxJS para una gestión eficiente de datos  
- **Diseño responsivo**: Interfaz limpia y responsiva con tablas estilizadas  
- **Integración de datos mock**: Ejemplo práctico de consumo de datos desde un archivo JSON  
- **Seguridad de tipos**: Soporte completo de TypeScript con tipado estricto  
- **Listo para desarrollo**: Incluye herramientas de desarrollo y configuración de testing  

## 🛠️ Tecnologías Utilizadas

- **Framework**: Angular 21.2  
- **Lenguaje**: TypeScript 5.9  
- **Estilos**: CSS3 con layouts modernos  
- **Cliente HTTP**: Angular HttpClient  
- **Programación reactiva**: RxJS 7.8  
- **Testing**: Vitest 4.0  
- **Herramienta de build**: Angular CLI 21.2.3  
- **Gestor de paquetes**: npm 11.12.0  

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v18+ recomendado)
- **npm** (incluido con Node.js)
- **Angular CLI** (opcional pero recomendado)

```bash
npm install -g @angular/cli@21

## 🚀 Getting Started

### 1. Clonar el repositorio
bash git clone https://github.com/josema01/Frontend-con-Mock.git 
cd Frontend-con-Mock
### 2. Instalar dependencias
bash npm install

### 3. Iniciar el servidor de desarrollo
bash npm start

The application will be available at `http://localhost:4200/`

## 📁 Estructura del proyecto
frontend-mock-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── user-list/
│   │   │       ├── user-list.component.ts
│   │   │       ├── user-list.component.html
│   │   │       └── user-list.css
│   │   ├── services/
│   │   │   └── user.service.ts
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── assets/
│   │   └── users.json
│   ├── main.ts
│   ├── styles.css
│   └── index.html
├── angular.json
├── tsconfig.json
├── package.json
└── README.md


## 🔧 Scripts Disponibles

| Command | Description |
|---------|-------------|
| `npm start` | Runs the development server on http://localhost:4200 |
| `npm run build` | Builds the project for production in the `dist/` directory |
| `npm run watch` | Watches for file changes and rebuilds continuously |
| `npm test` | Runs unit tests with Vitest |

## 📊 Estructura de los Datos Mock

Los datos mock de usuarios se encuentran en:
src/assets/users.json
json [ { "id": 1, "nombre": "User Name", "correo": "user@example.com" }, ... ]


### 🧩 Servicio de Usuarios

El servicio UserService (src/app/services/user.service.ts) se encarga de obtener los datos:
typescript export class UserService { private apiUrl = '/users.json';

constructor(private http: HttpClient) {}

getUsers(): Observable<any[]> { return this.http.get<any[]>(this.apiUrl); } }


## 🎨 Componente Lista de Usuarios

El componente UserListComponent muestra los usuarios en una tabla con:

Diseño responsivo
Cabecera con nombres de columnas (Nombre, Correo)
Estilos con gradiente en el encabezado
Efectos hover en las filas
Colores alternos para mejorar la legibilidad

## 🔄 Flujo de Datos
UserListComponent
   ↓
UserService (getUsers)
   ↓
HttpClient.get()
   ↓
assets/users.json
   ↓
Observable RxJS
   ↓
Template (async pipe)

## 📱 Compatibilidad de Navegadores

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contribuciones

Contributions are welcome! Here's how you can help:

1. Haz un fork del repositorio
2. Crea una nueva rama (git checkout -b feature/NuevaFuncionalidad)
3. Realiza commit de tus cambios (`git commit -m "Añade nueva funcionalidad")
4. Sube la rama (`git push origin feature/NuevaFuncionalidad)
5. Abre un Pull Request

## 📚 Recursos Adicionales

- [Angular Documentation](https://angular.dev)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [RxJS Documentation](https://rxjs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 👤 Author

**José Manuel Moraga**
- GitHub: [@josema01](https://github.com/josema01)

## 📞 Support

Si tienes preguntas o encuentras problemas, abre un issue en el repositorio de GitHub.

---

Última actualización: Abril 2026
Versión de Angular: 21.2.3
Versión de Node.js: 18++