# 🐾 StraySouls

> Helping every paw find care, hope, and a loving home. ❤️

StraySouls is a web-based animal rescue platform that connects shelters, volunteers, adopters, and animal lovers. It allows users to report stray or injured animals, request medical assistance, schedule appointments, support adoption, and track rescue locations.

## ✨ Features

- 🔐 User registration and secure login
- 🛡️ JWT-based authentication
- 🚨 Report stray or injured animals
- 📸 Upload animal images
- 🏥 Request medical assistance
- 📅 Schedule appointments
- 🏡 Support animal adoption
- 🤝 Volunteer registration
- 🏢 Shelter registration
- 📍 Rescue location heatmap
- 📊 Admin dashboard
- ⚡ Real-time communication using Socket.IO
- ☁️ Cloudinary image storage
- 🗄️ MongoDB database integration

## 🛠️ Technologies Used

- 🌐 HTML5
- 🎨 CSS3
- ⚙️ JavaScript
- 🟢 Node.js
- 🚀 Express.js
- 🍃 MongoDB
- 📦 Mongoose
- 🔑 JSON Web Token
- 🔄 Socket.IO
- ☁️ Cloudinary
- 📤 Multer
- 🔒 bcryptjs

## 📁 Project Structure

```text
StraySouls/
├── config/          # Cloudinary configuration
├── controller/      # Application controllers
├── database/        # Database connection
├── middlewares/     # Authentication and upload middleware
├── models/          # MongoDB models
├── public/          # Frontend files
├── router/          # API routes
├── uploads/         # Uploaded files
├── package.json     # Project dependencies
└── server.js        # Main server file
```

## ✅ Prerequisites

Before running the project, install:

- 🟢 Node.js
- 📦 npm
- 🍃 MongoDB
- ☁️ Cloudinary account for image uploads

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/straysouls.git
```

### 2. Open the project directory

```bash
cd StraySouls
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start MongoDB

The application uses the following local MongoDB database:

```text
mongodb://localhost:27017/straycare
```

### 5. Create a `.env` file

Create a `.env` file in the project root:

```env
PORT=3000
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 6. Start the server

```bash
node server.js
```

For development, use:

```bash
npx nodemon server.js
```

### 7. Open the application

Visit:

```text
http://localhost:3000
```

## 🔗 API Routes

| Route | Description |
|---|---|
| `/api/auth` | User registration and authentication |
| `/api/reports` | Create and manage animal rescue reports |
| `/api/appointments` | Create and manage appointments |

## 🌍 Project Purpose

StraySouls makes animal rescue easier, faster, and more organized by providing a single platform for:

- 🚨 Reporting animals in need
- 🏥 Requesting medical help
- 🏡 Supporting adoption
- 🤝 Connecting with volunteers
- 🏢 Helping shelters manage rescue activities
- 💝 Contributing to animal welfare

## 🔮 Future Improvements

- 💳 Online donation payment integration
- ✅ Shelter and volunteer verification
- 🔔 Push notifications
- 🐶 Adoption status tracking
- 📈 Improved admin analytics
- 📱 Mobile application support
- 🗺️ Advanced rescue tracking

## 🤝 Contributing

Contributions are welcome! You can help improve StraySouls by:

1. Forking the repository
2. Creating a new branch
3. Making your changes
4. Committing your changes
5. Opening a pull request

## 📄 License

This project is licensed under the ISC License.

## ❤️ Support Animal Welfare

Every report, rescue, donation, and adoption can make a difference.

> 🐾 Together, we can give every stray soul a better tomorrow.
