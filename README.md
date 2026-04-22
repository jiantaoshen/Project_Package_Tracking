# 📦 React Dropdown Order List

A responsive React component that fetches order data from an API and displays it in a dropdown (accordion-style) list.

---

## 🚀 Features

* Fetch data from external API
* Dropdown (accordion) UI for each item
* Status-based color styling
* Grid layout (3 fields per row)

---

## 📸 UI Behavior

* Each item shows **sender name + status**
* Click to expand and view detailed information
* Only one item opens at a time
* Responsive Design

---

## 🛠️ Tech Stack

* React (Hooks: `useState`, `useEffect`)
* Bootstrap
* Fetch API



## 🔌 API

Example API used:

```
https://my.api.mockaroo.com/orders.json?key=e49e6840
```

---

## 📦 Example Data

Each item contains:

* sender
* status
* eta
* parcel_id
* location_name
* coordinates
* user info
* notes

---

## 🎨 Status Styling

| Status     | Color  |
| ---------- | ------ |
| delivered   | Green  |
| ready-for-pickup | Orange |
| others     | Gray   |

---

## 🧠 Key Concepts

* **State-driven UI**: React re-renders when state updates
* **Props**: Passing fetched data to child component
* **Conditional rendering**: Show/hide dropdown content
* **CSS Grid**: Structured layout for item details


