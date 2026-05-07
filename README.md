# User Card Management Application

A simple React + Vite application for creating, displaying, and managing user cards with profile information.

## 📋 Project Overview

This is a dynamic user management application that allows users to:

- **Create user profiles** with personal information (name, role, description, and profile image)
- **Display user cards** in a responsive grid layout
- **Delete user cards** with a single click
- **Responsive design** that adapts to different screen sizes (mobile, tablet, desktop)

## 🚀 Tech Stack

- **React** ^19.2.4 - UI library
- **Vite** ^8.0.1 - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework (via existing styles)
- **JavaScript (ES6+)** - Modern JavaScript syntax

## 📁 Project Structure

```
Task-2/
├── src/
│   ├── App.jsx           # Main component with form and card display logic
│   ├── main.jsx          # Entry point
│   ├── App.css           # Application styles
│   ├── index.css         # Global styles
│   ├── assets/           # Static assets
│   └── components/
│       └── card.jsx      # Card component for displaying user profiles
├── public/               # Public assets
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

## 🎯 Components

### App.jsx (Main Component)

**Purpose:** Core application component managing state and user list

**State Variables:**

- `UserName` - User's full name
- `UserRole` - User's professional role/title
- `UserDisc` - User's description/bio
- `ImageURL` - URL to user's profile image
- `AllUSer` - Array storing all created users

**Key Functions:**

- `submitHandler()` - Handles form submission, adds new user to list
- `deleteHandler()` - Removes user from list by index

**Features:**

- **Form Section:** Collects user information with 4 input fields
- **Display Section:** Shows all users in a responsive grid of cards
- **Dark Theme:** Black background with white text

### card.jsx (Card Component)

**Purpose:** Displays individual user profile information

**Props Received:**

- `elem` - User object containing UserName, UserRole, UserDisc, ImageURL
- `idx` - Index of the user in the array
- `deleteHandler` - Function to delete the user
- `key` - React key for list rendering

**Features:**

- **Profile Image:** Circular image with proper cropping
- **User Information:** Displays name, role, and description
- **Delete Button:** Removes user from the list
- **Responsive Design:** Adjusts width based on screen size

## 📱 Responsive Breakpoints

Using Tailwind CSS classes:

- **Large screens (lg):** 23vw width
- **Medium screens (md):** 30vw width
- **Small screens (sm):** 45vw width

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/adnanashraf-code/Task-2.git
   ```

2. **Navigate to project directory**

   ```bash
   cd Task-2
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173` (or next available port)

## 🔧 Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server with Hot Module Replacement (HMR)

### Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder

### Preview

```bash
npm run preview
```

Previews the production build locally

### Lint

```bash
npm run lint
```

Runs ESLint to check code quality

## 💡 How It Works

1. **Adding a User:**
   - Fill in all form fields (Name, Image URL, Role, Description)
   - Click "Create User" button
   - User card appears in the grid below
   - Form fields reset automatically

2. **Viewing Users:**
   - All users display as cards in a responsive grid
   - Each card shows profile image, name, role, and description

3. **Removing a User:**
   - Click the "Remove" button on any card
   - User is instantly removed from the list

## 🎨 Styling

The application uses **Tailwind CSS** utility classes for:

- Dark theme layout (`bg-black text-white`)
- Responsive grid layout (`flex flex-wrap gap-4`)
- Card styling (`rounded-xl py-8 px-8`)
- Button effects (`active:scale-95`)

## 🐛 Bug Fixes Applied

✅ **React Key Warning Fix:** Added proper `key` prop to mapped Card components to prevent React warnings about unique keys in lists.

## 🚀 Future Enhancements

Potential improvements:

- Add edit functionality for existing users
- Implement local storage to persist user data
- Add user search/filter capability
- Add form validation
- Implement different user roles/permissions
- Add animations and transitions

## 📝 Code Quality

- **ESLint configured** for code consistency
- **React best practices** followed (proper key usage, component structure)
- **Responsive design** implemented
- **Clean code** with clear variable naming

## 📄 License

This project is private and maintained by adnanashraf-code.

## 👤 Author

**Adnan Ashraf**

- GitHub: [@adnanashraf-code](https://github.com/adnanashraf-code)
- Repository: [Task-2](https://github.com/adnanashraf-code/Task-2)
