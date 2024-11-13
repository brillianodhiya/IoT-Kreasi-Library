# IoT Kreasi UI Library Component for React.js

## Overview

This project is a React.js component designed to interface with IoT devices. It provides a user-friendly interface for monitoring and controlling various IoT devices, making it easier to integrate IoT functionality into your web applications.

## Features

- **Real-time Data Monitoring**: Display real-time data from your IoT devices.
- **Device Control**: Send commands to control your IoT devices directly from the UI.
- **Customizable**: Easily customize the look and feel of the component to match your application's design.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Easy Integration**: Simple to integrate with existing React applications.

## Installation

To install the component, use npm or yarn:

```bash
npm install @kanrishaurus/iotkreasi-ui-library
```

or

```bash
yarn add @kanrishaurus/iotkreasi-ui-library
```

## Usage

Here's a basic example of how to use the IoT Kreasi UI Library Component in your React application:

```jsx
import React from "react";
import IoTDeviceUI from "@kanrishaurus/iotkreasi-ui-library";

function App() {
  return (
    <div className="App">
      <h1>IoT Device Dashboard</h1>
      <IoTDeviceUI deviceId="your-device-id" />
    </div>
  );
}

export default App;
```

## Props

- `deviceId` (string): The ID of the IoT device to connect to.
- `theme` (string, optional): The theme of the UI component (e.g., 'light', 'dark').

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact us at support@iotiki.com.

## Changelog

### v1.0.1

- Renamed the component to IoT Kreasi UI Library.

### v1.0.0

- Initial release of the IoT Kreasi UI Library Component for React.js.
- Features include real-time data monitoring, device control, customizable UI, responsive design, and easy integration.
