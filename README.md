# Youtube Subscribers

This project is a backend application that provides APIs for managing YouTube subscibers

The APIs provided by this application include the following:

-> `GET /subscribers`: Returns an array of all subscribers in the database.

-> `GET /subscribers/names`: Returns an array of subscribers with only two fields name and subscribedChannel

-> `GET /subscribers/:id`: Returns the details of a subscriber with the given ID.

## Prerequisites

Before running this application, you must have the following installed:

Node.js

MongoDB

## Installation

1. Clone this repository:

```bash
 git clone https://github.com/Rohitsolan/youtube_subs.git

```

2. Install dependencies:

```bash
 npm install
```

3. Create a .env file and add monogodb uri

4. Create a database:

```bash
node src/createDatabase.js
```

5. Start the application:

```bash
 npm start
```

6. Run tests:

```bash
npm run test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
