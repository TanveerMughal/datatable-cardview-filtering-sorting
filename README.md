# MaxGo Assessment Task

## Task List

1. Setup two views Datatable and Listview
2. Creating a mock API to get data from it.
3. Setup sorting, filtering and pagination funcitonality.
4. Check all the listings on either view.
5. Setup a separate page to display a single property data.
6. Setup Readme
7. Use a github repo to share the code.

## Notes:

1. Rather than manually typing the data, I have written a small script in data.ts to generate one for me which I later saved in data.json by copying from console.
2. I am using React's useReducer hook to manage the state between filtersComponent, DataView and CardView.
3. I understand that I was supposed to apply filtering and sorting only on datatable view but don't know why I am keeping it this way where both views have these functionalities.
4. Using localstorage to store the view state so refreshing wont cause reset in state.
