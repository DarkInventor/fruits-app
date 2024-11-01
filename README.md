# Fruit List Application

## Description

The Fruit List Application is a dynamic web application built with Next.js, TypeScript, and Tailwind CSS. It allows users to view, group, and interact with a list of fruits fetched from an external API. Users can add fruits to a virtual jar, view nutritional information, and visualize the data through an interactive pie chart.

## Features

- **Data Fetching**: Retrieves fruit data from an external API.
- **Grouping Functionality**: Allows users to group fruits by Family, Order, or Genus.
- **Dual View Options**: 
  - List View: Displays fruits in a collapsible list format.
  - Table View: Presents fruits in a tabular format with detailed information.
- **Jar Functionality**: 
  - Users can add individual fruits or entire groups to a virtual jar.
  - Calculates and displays the total calories of fruits in the jar.
  - Visualizes the calorie distribution of fruits in the jar using a pie chart.
- **Responsive Design**: Adapts to various screen sizes for optimal viewing on different devices.

## Technologies Used

- [Next.js](https://nextjs.org/): React framework for building the user interface
- [TypeScript](https://www.typescriptlang.org/): For type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/): For styling and responsive design
- [shadcn/ui](https://ui.shadcn.com/): For pre-built UI components
- [Recharts](https://recharts.org/): For creating the pie chart visualization

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/your-username/fruit-list-application.git
   ```

2. Navigate to the project directory:
   ```
   cd fruit-list-application
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage Guide

1. **Viewing Fruits**: Upon loading, the application displays a list of fruits fetched from the API.

2. **Grouping Fruits**: Use the "Group by" dropdown to select a grouping criterion (None, Family, Order, or Genus).

3. **Switching Views**: Toggle between List and Table views using the tabs at the top of the fruit list.

4. **Adding to Jar**: 
   - In List View: Click "Add" next to a fruit to add it to the jar. Use "Add All" to add all fruits in a group.
   - In Table View: Click "Add" in the Action column to add a fruit to the jar.

5. **Viewing Jar Contents**: The right side of the application displays the contents of your jar, including total calories.

6. **Pie Chart Visualization**: Click "Show Chart" in the Jar section to view a pie chart representation of the fruits in your jar based on their calorie content.

## API Information

The application fetches fruit data from the following API endpoint:
`https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws/`

Note: The application uses a proxy API route to handle CORS issues when fetching data from this endpoint.

## Contributing

Contributions to improve the Fruit List Application are welcome. Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Deployment

This application is deployed on Vercel. You can view the live version here: [Live Demo](https://your-vercel-deployment-url.vercel.app)

## Contact

If you have any questions or feedback, please open an issue in the GitHub repository.
