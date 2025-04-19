### 📁 **React CRUD User Management App**

This project is a **React.js CRUD application** that allows users to manage a list of people by adding, viewing, editing, and deleting their information. The user data includes **name, phone number, email, and location**. It connects to a **Mock API** to persist data and uses **React Router** for client-side navigation.

---

### 🚀 **Features**

- ✅ Add new users with form validation (name, email, 10-digit phone number, location)
- 🔍 View detailed user information
- ✏️ Edit existing user records
- ❌ Delete users from the list
- 📋 Display all users in a styled table layout
- 🧠 State management using `useState` and `useEffect`
- 🛡️ Form validation logic for a clean user experience

---

### 🛠️ **Tech Stack**

- React.js (functional components + hooks)
- React Router DOM
- Axios (API communication)
- Bootstrap (styling)
- MockAPI (https://mockapi.io/) for fake backend

---

### 📂 **File Structure Overview**

```
react-crud-user-management/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── AddUser.js        # Form to add a new user
│   │   ├── EditUser.js       # Form to edit existing user data
│   │   ├── ViewUser.js       # Display user details
│   │   └── UserList.js       # Homepage displaying all users
│   │
│   ├── api.js                # Axios instance configured with Mock API base URL
│   ├── App.js                # Main component containing all routes
│   └── index.js              # Entry point rendering the App component
│
├── db.json                   # Local mock database (for use with JSON Server if needed)
└── package.json              # Project dependencies and scripts
```

---

### 🧪 **Validation Rules**

- 📧 Email must follow valid format (`example@mail.com`)
- 📱 Phone number must contain exactly **10 digits**
- ✍️ Name and location fields cannot be empty

---

😎👩🏼‍💻
