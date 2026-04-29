# Frontend Mock Angular

A modern Angular 21 application that demonstrates data fetching and display with mock JSON data. This project showcases best practices for building responsive web applications with Angular's latest features, including standalone components and reactive patterns.

## 🎯 Features

- **Modern Angular Architecture**: Built with Angular 21 using standalone components
- **Reactive Data Flow**: Uses RxJS Observables for efficient data handling
- **Responsive Design**: Clean, responsive UI with attractive table styling
- **Mock Data Integration**: Demonstrates how to work with JSON mock data
- **Type Safety**: Full TypeScript support with strict typing
- **Development Ready**: Includes dev tools and testing framework setup

## 🛠️ Tech Stack

- **Framework**: Angular 21.2
- **Language**: TypeScript 5.9
- **Styling**: CSS3 with modern layouts
- **HTTP Client**: Angular HttpClient for data fetching
- **Reactive Patterns**: RxJS 7.8
- **Testing**: Vitest 4.0
- **Build Tool**: Angular CLI 21.2.3
- **Package Manager**: npm 11.12.0

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v18+ recommended)
- **npm** (comes with Node.js)
- **Angular CLI** (optional but recommended):
  ```bash
  npm install -g @angular/cli@21
  ```

## 🚀 Getting Started

### 1. Clone the Repository
bash git clone https://github.com/josema01/Frontend-con-Mock.git cd Frontend-con-Mock
### 2. Install Dependencies
bash npm install

### 3. Start Development Server
bash npm start

The application will be available at `http://localhost:4200/`

## 📁 Project Structure
frontend-mock-angular/ ├── src/ │ ├── app/ │ │ ├── components/ │ │ │ └── user-list/ │ │ │ ├── user-list.component.ts │ │ │ ├── user-list.component.html │ │ │ └── user-list.css │ │ ├── services/ │ │ │ └── user.service.ts │ │ ├── app.ts │ │ ├── app.html │ │ ├── app.css │ │ ├── app.routes.ts │ │ └── app.config.ts │ ├── assets/ │ │ └── users.json │ ├── main.ts │ ├── styles.css │ └── index.html ├── angular.json ├── tsconfig.json ├── package.json └── README.md


## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the development server on http://localhost:4200 |
| `npm run build` | Builds the project for production in the `dist/` directory |
| `npm run watch` | Watches for file changes and rebuilds continuously |
| `npm test` | Runs unit tests with Vitest |

## 📊 Mock Data Structure

The application uses mock user data from `src/assets/users.json`:
json [ { "id": 1, "nombre": "User Name", "correo": "user@example.com" }, ... ]


### User Service

The `UserService` (`src/app/services/user.service.ts`) handles data fetching:
typescript export class UserService { private apiUrl = '/users.json';

constructor(private http: HttpClient) {}

getUsers(): Observable<any[]> { return this.http.get<any[]>(this.apiUrl); } }


## 🎨 User List Component

The `UserListComponent` displays users in a styled table format with:
- Responsive layout
- Table header with column names (Nombre, Correo)
- Gradient styling for headers
- Hover effects on rows
- Alternating row colors

## 🔄 Data Flow
UserListComponent ↓ UserService (getUsers()) ↓ HttpClient.get() → /assets/users.json ↓ RxJS Observable ↓ Template (async pipe)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🏗️ Building for Production
bash npm run build

The optimized build artifacts will be stored in the `dist/` directory.

## ✅ Testing

Run the test suite:
bash npm test


## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📚 Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [RxJS Documentation](https://rxjs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 👤 Author

**José Manuel Moraga**
- GitHub: [@josema01](https://github.com/josema01)

## 📞 Support

If you have any questions or encounter issues, please open an issue on the GitHub repository.

---

**Last Updated**: April 2026  
**Angular Version**: 21.2.3  
**Node Version**: 18+