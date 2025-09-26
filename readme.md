# SkillShare 🤝

**SkillShare** is a full-stack web application that connects users through mutual skill interests, enabling them to showcase their expertise, identify learning opportunities, and build meaningful connections through a comprehensive friend-request system. The platform is designed to facilitate skill-sharing through online mediums like chat and video calls.

## 🚀 Features

### 👤 User Onboarding
- Complete profile setup with full name, bio, and avatar selection
- Dual skill categorization system:
  - **Skills Offered**: Expertise you can share with others
  - **Skills Wanted**: Skills you're looking to learn
- Auto-generated profile pictures using avatar API (DiceBear) for personalized experience

### 👥 Friend Management System
- **Send Friend Requests**: Connect with users who have complementary skills
- **Request Management**: Accept or reject incoming friend requests
- **Friends List**: View and manage your existing connections
- Real-time updates powered by React Query for seamless user experience

### 🔔 Smart Notifications
- Instant toast notifications powered by React Hot Toast
- Real-time updates for:
  - New incoming friend requests
  - Request status updates (accepted/rejected)
  - New messages and chat activity
- Visual categorization with timestamps for better organization

### 🧠 Skill Visualization
- Clean, badge-based skill display system
- Clear separation between offered and learning skills
- Easy-to-scan skill categories for quick matching

### 💬 Real-time Chat & Video
- **Stream Chat Integration**: Full-featured messaging system between connected friends
- **Video Calling**: Built-in video chat capabilities using Stream Video SDK
- Direct communication channels for seamless skill exchange coordination
- Real-time message delivery and online status indicators

### 🎨 Dynamic Avatars
- Randomly generated avatars from public API DiceBear
- Fun and unique visual identity for each user

## 🔧 Tech Stack

### Frontend
- **React 19.1.0** - Component-based UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS + DaisyUI** - Utility-first CSS with component library
- **TanStack React Query** - Powerful data fetching and state management
- **React Router 7** - Client-side routing
- **Zustand** - Lightweight state management
- **Stream Chat React** - Real-time chat functionality
- **Stream Video React SDK** - Video calling capabilities
- **React Hot Toast** - Beautiful toast notifications
- **Lucide React** - Icon library
- **Axios** - HTTP client

### Backend
- **Node.js + Express** - Server runtime and web framework
- **MongoDB + Mongoose** - NoSQL database with ODM
- **Stream Chat** - Real-time messaging backend
- **JWT + bcryptjs** - Authentication and password hashing
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie handling middleware

### Development Tools
- **ESLint** - Code linting and formatting
- **Nodemon** - Auto-restart development server
- **PostCSS + Autoprefixer** - CSS processing

### Deployment
- **Frontend**: Netlify/Vercel
- **Backend**: Render/Railway

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed locally or MongoDB Atlas account
- Git

### Clone the Repository
```bash
git clone https://github.com/yourusername/skillswap.git
cd skillswap
```

### Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
PORT=5000
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000/api
VITE_STREAM_API_KEY=your_stream_api_key
```

Start the frontend development server:
```bash
npm run dev
```

## 🧪 Testing & Development

### API Testing
- All backend routes thoroughly tested using **Postman**
- Comprehensive test collection available for API endpoints

### Error Handling & UX
- **Frontend**: Beautiful toast notifications with `react-hot-toast`
- **Backend**: Robust error handling with proper HTTP status codes
- **State Management**: Zustand for efficient global state management
- **Data Fetching**: TanStack React Query for caching and synchronization
- Comprehensive validation for user inputs and API responses

### Development Tools
- **Vite**: Lightning-fast development server with HMR (Hot Module Replacement)
- **ESLint**: Code linting with React-specific rules
- **Nodemon**: Auto-restart for backend development
- **DaisyUI**: Pre-built Tailwind components for rapid UI development

## 📁 Project Structure

```
skillShare/
├── frontend/
│   ├── src/
│   │   ├── components/
|   |   ├── constants/ 
|   |   ├── hooks/ 
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   └── App.js
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
|   |   ├── lib/ 
|   |   ├── middleware/ 
│   │   ├── models/
│   │   ├── routes/
│   └── package.json
└── README.md
```

## 🚦 API Endpoints

### Authentication
- `POST /api/auth/signup` - User signup
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/onboard` - Onboarding User

### Friend Requests
- `GET /api/users` - Recommended Users
- `GET /api/users/friends` - Get friends list
- `DELETE /api/users/friends/:id/remove` - Remove Friend
- `POST /api/users/friend-request/:id` - Send friend request
- `PUT /api/users/friend-request/:id/accept` - Accept friend request
- `GET /api/users/friend-requests` - Get friend requests
- `GET /api/users/outgoing-friend-requests` - Get outgoing friend requests
- `PATCH /api/users/friend-request/:id/reject` - Reject friend request


### Chat & Video
- `GET /api/chat/token` - Generate chat and video call token 


## 🔮 Future Enhancements

- [ ] Advanced skill matching algorithm with compatibility scoring
- [ ] Group skill-sharing sessions and workshops
- [ ] Skill rating and review system
- [ ] Achievement badges and gamification elements
- [ ] Calendar integration for scheduling sessions
- [ ] Mobile app development (React Native)
- [ ] AI-powered skill recommendations
- [ ] Integration with learning platforms (YouTube, Coursera, etc.)


## 🙏 Acknowledgments

- Avatar API providers for profile picture generation
- Open source community for the amazing tools and libraries
- Contributors and testers who helped improve the platform

---

**Happy Skill Swapping!** 🎯
