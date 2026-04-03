# WhatsApp-like Messaging Application

A full-stack web application for real-time messaging, built with vanilla HTML/CSS/JavaScript frontend, Node.js/Express backend, MongoDB database, and WebSockets for real-time features.

## Features

- ✅ User Authentication (Register/Login with JWT)
- ✅ One-to-One Messaging
- ✅ Group Chats
- ✅ Real-time Messages (WebSocket via Socket.io)
- ✅ Message Read Status
- ✅ User Online/Offline Status
- ✅ Responsive UI (Mobile & Desktop)
- ✅ Typing Indicators

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Real-time**: Socket.io
- **Authentication**: JWT (JSON Web Tokens)
- **Language**: TypeScript

### Frontend
- **HTML/CSS/JavaScript** (Vanilla - No Framework)
- **Styling**: Tailwind CSS (CDN)
- **Real-time**: Socket.io Client
- **API**: Fetch API
- **Responsive**: Mobile-first design
- **Real-time**: Socket.io Client

## Project Structure

```
whatsapp-app/
├── backend/
│   ├── src/
│   │   ├── models/         # Database schemas
│   │   ├── controllers/    # Route handlers
│   │   ├── routes/         # API endpoints
│   │   ├── middleware/     # Auth & custom middleware
│   │   ├── services/       # Business logic
│   │   ├── utils/          # Utility functions
│   │   └── server.ts       # Express & Socket.io setup
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React Context (Auth, Chat)
│   │   ├── services/       # API & Socket services
│   │   ├── utils/          # Helper functions
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Tailwind CSS
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── index.html
│
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js v16+ and npm/yarn
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file (copy from `.env.example`):
   ```bash
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/whatsapp
   JWT_SECRET=your_secret_key_change_in_production
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:3000
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Chats
- `GET /api/chats` - Get all user chats
- `POST /api/chats` - Create or get one-to-one chat
- `POST /api/chats/group` - Create group chat

### Messages
- `POST /api/messages` - Send message
- `GET /api/messages/:chatId` - Get chat messages
- `PUT /api/messages/read` - Mark messages as read

## WebSocket Events

### Client → Server
- `join-chat` - Join chat room
- `leave-chat` - Leave chat room
- `send-message` - Send new message
- `typing` - User is typing
- `stop-typing` - User stopped typing
- `user-online` - User came online

### Server → Client
- `receive-message` - New message received
- `user-typing` - User typing status
- `user-status` - User online/offline status

## Usage

1. **Register/Login**: Create account or login with existing credentials
2. **Start Chat**: Click on a user to start one-to-one messaging
3. **Create Group**: Use "Create Group" button to add multiple users
4. **Send Messages**: Type and send messages in real-time
5. **See Online Status**: View user online/offline status

## Development

### Build
```bash
# Backend
cd backend && npm run build

# Frontend
cd frontend && npm run build
```

### Run Production
```bash
# Backend
cd backend && npm start

# Frontend
cd frontend && npm run preview
```

## Next Steps / Future Features

- [ ] Voice/Video Calls
- [ ] Media Upload (Images, Videos, Files)
- [ ] Message Search
- [ ] User Profiles & Status
- [ ] Message Reactions & Emojis
- [ ] End-to-End Encryption
- [ ] Mobile App (React Native)
- [ ] Docker Containerization
- [ ] Deployment to Cloud (Heroku, AWS, Vercel)

## Database Models

### User
- `_id`: ObjectId
- `username`: String (unique)
- `email`: String (unique)
- `password`: String (hashed)
- `profilePic`: String (optional)
- `status`: String
- `lastSeen`: Date
- `timestamps`: createdAt, updatedAt

### Chat
- `_id`: ObjectId
- `name`: String (for groups)
- `isGroup`: Boolean
- `members`: [ObjectId] - User references
- `admin`: ObjectId - Chat admin (groups)
- `lastMessage`: ObjectId - Message reference
- `timestamps`: createdAt, updatedAt

### Message
- `_id`: ObjectId
- `chat`: ObjectId - Chat reference
- `sender`: ObjectId - User reference
- `content`: String
- `imageUrl`: String (optional)
- `read`: Boolean
- `readBy`: [ObjectId] - User references
- `timestamps`: createdAt, updatedAt

## Troubleshooting

### Port Already in Use
```bash
# Change PORT in .env or kill process using port
# Linux/Mac: lsof -i :5000
# Windows: netstat -ano | findstr :5000
```

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in .env
- For Atlas, whitelist your IP

### Socket.io Connection Failed
- Ensure backend is running on correct port
- Check CORS_ORIGIN in backend .env
- Clear browser cache and restart server

## License

MIT

## Support

For issues or questions, please open an issue on the repository.
