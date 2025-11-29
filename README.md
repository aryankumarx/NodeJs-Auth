## 🔌 API Endpoints

### 🔐 Authentication
| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user | `{ "username": "...", "email": "...", "password": "...", "role": "user" }` |
| `POST` | `/api/auth/login` | Login user | `{ "username": "...", "password": "..." }` |

### 🏠 Home & Admin (Protected)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/home/welcome` | Welcome message for logged-in users | ✅ Yes (Token) |
| `GET` | `/api/admin/welcome` | Welcome message for Admins only | ✅ Yes (Token + Admin Role) |

### 🖼️ Image Upload
| Method | Endpoint | Description | Form-Data Key |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/image/upload` | Upload image to Cloudinary | Key: `image`, Value: `(file)` |
| `GET` | `/api/image/get` | Get all images uploaded by user | N/A |