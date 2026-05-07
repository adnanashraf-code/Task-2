# User Card Management Application

A React + Vite application for creating, displaying, and managing responsive user profile cards.

## 📋 Project Overview

This project lets users create profile cards with the following details:

- **Name**
- **Profile image URL**
- **Role / title**
- **Short description**

Users can add new cards via the form and remove cards instantly from the list.

## 🚀 Tech Stack

- **React** `^19.2.4`
- **Vite** `^8.0.1`
- **Tailwind CSS** `^4.2.4`
- **JavaScript (ES6+)**
- **ESLint** `^9.39.4`

## 📁 Project Structure

```
Task-2/
├── public/               # Static public assets
├── src/
│   ├── App.jsx           # Main application logic and user form
│   ├── main.jsx          # React app entry point
│   ├── App.css           # Component-specific styles
│   ├── index.css         # Global styles and Tailwind imports
│   ├── assets/           # Static assets used by the app
│   └── components/
│       └── Card.jsx      # User card display component
├── index.html            # Main HTML template
├── package.json          # Dependencies, scripts, and project metadata
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── README.md             # Project documentation
```

## 🎯 Application Details

### `src/App.jsx`

This is the main React component for the app.

- Manages form input state for:
  - `UserName`
  - `UserRole`
  - `UserDisc`
  - `ImageURL`
- Stores created users in the `AllUSer` state array
- Handles form submission with `submitHandler`
- Removes users from the list with `deleteHandler`
- Renders the create-user form and the user cards grid

### `src/components/Card.jsx`

This component renders each user profile card.

- Displays the user's image, name, role, and description
- Uses a default fallback image if `ImageURL` is not provided
- Includes a **Remove** button to delete the card
- Uses responsive Tailwind classes for layout and hover effects

## 📦 Installation & Setup

### Prerequisites

- Node.js 14+ (recommended)
- npm or yarn

### Setup Steps

```bash
# clone the repo
git clone https://github.com/adnanashraf-code/Task-2.git

# navigate inside the project
cd Task-2

# install dependencies
npm install
```

### Run locally

```bash
npm run dev
```

Open the URL shown by Vite to view the app in your browser.

## 🔧 Available Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Starts Vite development server      |
| `npm run build`   | Builds the production bundle        |
| `npm run preview` | Serves the production build locally |
| `npm run lint`    | Runs ESLint on the source files     |

## 💡 Usage

1. Enter a name, image URL, role, and description.
2. Click **Create User**.
3. The new profile card appears below the form.
4. Click **Remove** to delete a card.

## 🎨 Styling

The app uses Tailwind CSS utility classes to create a modern dark theme layout.

Key visual elements:

- dark background with white text
- responsive card grid
- rounded card containers
- hover elevation effects
- animated buttons and inputs

## ✅ Notes

- The form resets after each successful submission.
- Cards are stored only in React state and are lost on page refresh.
- The card component provides an image fallback when no URL is provided.

## 🚀 Future Improvements

- Add edit/update card functionality
- Persist users in local storage or backend
- Add validation for image URL and text fields
- Add search and filter support
- Add animations and accessible keyboard support

## 📦 Dependency Summary

- `react`
- `react-dom`
- `vite`
- `tailwindcss`
- `@vitejs/plugin-react`
- `eslint`
- `@eslint/js`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `globals`
- `@types/react`
- `@types/react-dom`

---

If you want, I can also add a quick `CONTRIBUTING.md` or improve the component names and code style next.

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
