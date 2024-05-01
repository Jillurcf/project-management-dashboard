# Setup Instructions:

- Clone the project repository from the version 
- control system (e.g., Git).
- Navigate to the project directory in your terminal.
- Run npm install or yarn install to install the - project dependencies.
- .env.local for firebase credential
- Start the development server using npm start or yarn start.
- Access the application in your web browser at the specified URL (usually localhost:3000).


# Brief Overview of Architecture:

## Authentication Page:
- Use React components with Ant Design for the login form.
- Implement form validation using Ant Design validation rules.
- Mock responses for successful and unsuccessful logins.
## Projects Overview Page:
- Use React components to display a list of projects.
- Fetch project data from a mock API using React Query.
- Include options to view, edit, or delete projects.
## Project Details Page:
- Navigate to a project details page upon selecting a project.
- Display detailed information about the project, including tasks, team members, and recent activities.
- Implement functionalities to add new tasks and assign team members.
## Task Management:
- Implement CRUD (Create, Read, Update, Delete) operations for tasks.
- Use Zustand to manage state, including task statuses (e.g., To Do, In Progress, Done).
- Implement drag-and-drop feature for changing task statuses.
- Task Filters and Search Functionality:
- Provide options to filter tasks by status, due date, or assignee.
- Include a search bar for quickly finding tasks based on keywords.
## Interactive Dashboard:
- Utilize Ant Design components for creating modals, dropdowns, and tooltips.
- Ensure responsiveness of all components using Tailwind CSS for styling.

## Live link: https://project-management-dashboard-lilac.vercel.app/